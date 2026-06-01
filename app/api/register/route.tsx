import { NextResponse } from "next/server";
import crypto from "crypto";

type RegisterInterestPayload = {
  firstName?: string;
  lastName?: string;
  mobile?: string;
  email?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as RegisterInterestPayload;

    const firstName = body.firstName?.trim();
    const lastName = body.lastName?.trim();
    const mobile = body.mobile?.trim();
    const email = body.email?.trim().toLowerCase();

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { message: "First name, last name, and email are required." },
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

    const mailchimpUrl = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}`;

    const response = await fetch(mailchimpUrl, {
      method: "PUT",
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString(
          "base64"
        )}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status_if_new: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
          PHONE: mobile || "",
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Mailchimp error:", data);

      return NextResponse.json(
        {
          message:
            data.detail ||
            "Something went wrong while adding the contact to Mailchimp.",
        },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { message: "Successfully registered interest." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Register interest error:", error);

    return NextResponse.json(
      { message: "Unexpected server error." },
      { status: 500 }
    );
  }
}