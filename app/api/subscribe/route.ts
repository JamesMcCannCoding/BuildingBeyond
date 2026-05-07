import { NextResponse } from "next/server";
import crypto from "node:crypto";

export const runtime = "nodejs";

type SubscribeBody = {
  firstName?: string;
  lastName?: string;
  email?: string;
  mobile?: string;
  interestTag?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as SubscribeBody;

    const firstName = body.firstName?.trim() ?? "";
    const lastName = body.lastName?.trim() ?? "";
    const email = body.email?.trim().toLowerCase() ?? "";
    const mobile = body.mobile?.trim() ?? "";
    const interestTag = body.interestTag?.trim() ?? "";

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { message: "First name, last name, and email are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.MAILCHIMP_API_KEY;
    const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;
    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

    if (!apiKey || !serverPrefix || !audienceId) {
      return NextResponse.json(
        { message: "Mailchimp environment variables are missing." },
        { status: 500 }
      );
    }

    const subscriberHash = crypto
      .createHash("md5")
      .update(email)
      .digest("hex");

    const authHeader =
      "Basic " + Buffer.from(`anystring:${apiKey}`).toString("base64");

    const memberResponse = await fetch(
      `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}`,
      {
        method: "PUT",
        headers: {
          Authorization: authHeader,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status_if_new: "subscribed",
          status: "subscribed",
          merge_fields: {
            FNAME: firstName,
            LNAME: lastName,
            PHONE: mobile || "",
          },
        }),
      }
    );

    const memberData = await memberResponse.json();

    if (!memberResponse.ok) {
      return NextResponse.json(
        {
          message: memberData.detail || "Failed to subscribe user.",
        },
        { status: memberResponse.status }
      );
    }

    if (interestTag) {
      const tagResponse = await fetch(
        `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}/tags`,
        {
          method: "POST",
          headers: {
            Authorization: authHeader,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tags: [{ name: interestTag, status: "active" }],
          }),
        }
      );

      if (!tagResponse.ok) {
        const tagData = await tagResponse.json().catch(() => null);

        return NextResponse.json(
          {
            message:
              tagData?.detail ||
              "The user was added, but the Mailchimp tag could not be applied.",
          },
          { status: tagResponse.status }
        );
      }
    }

    return NextResponse.json({
      message: "Thanks. You have been added successfully.",
    });
  } catch {
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
