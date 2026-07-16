import { NextResponse } from "next/server";
import crypto from "crypto";

type RegisterInterestPayload = {
  firstName?: string;
  lastName?: string;
  mobile?: string;
  email?: string;
};

const MAILCHIMP_TAG = "buildingbeyond2032";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as RegisterInterestPayload;

    const firstName = body.firstName?.trim();
    const lastName = body.lastName?.trim();
    const mobile = body.mobile?.trim();
    const email = body.email?.trim().toLowerCase();

    if (!firstName || !lastName || !mobile || !email) {
      return NextResponse.json(
        { message: "First name, last name, mobile number, and email are required." },
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

    const authHeader = `Basic ${Buffer.from(`anystring:${apiKey}`).toString(
      "base64"
    )}`;

    const memberUrl = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}`;

    const memberResponse = await fetch(memberUrl, {
      method: "PUT",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status_if_new: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
          PHONE: mobile,
        },
      }),
    });

    const memberData = await memberResponse.json();

    if (!memberResponse.ok) {
      console.error("Mailchimp member error:", memberData);

      return NextResponse.json(
        {
          message:
            memberData.detail ||
            "Something went wrong while adding the contact to Mailchimp.",
        },
        { status: memberResponse.status }
      );
    }

    const tagUrl = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}/tags`;

    const tagResponse = await fetch(tagUrl, {
      method: "POST",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tags: [
          {
            name: MAILCHIMP_TAG,
            status: "active",
          },
        ],
      }),
    });

    if (!tagResponse.ok) {
      const tagData = await tagResponse.json();
      console.error("Mailchimp tag error:", tagData);

      return NextResponse.json(
        {
          message:
            tagData.detail ||
            "The contact was added, but the Mailchimp tag could not be applied.",
        },
        { status: tagResponse.status }
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