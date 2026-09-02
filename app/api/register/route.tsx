import { NextResponse } from "next/server";
import crypto from "crypto";

type RegisterPayload = {
  firstName?: string;
  lastName?: string;
  mobile?: string;
  phone?: string;
  email?: string;
  currentOccupation?: string;
  company?: string;
  suburb?: string;
  postCode?: string;
  cfmeuMember?: string;
  seekingConstructionWork?: string;
};

const MAILCHIMP_TAG = "buildingbeyond2032";

const MERGE_TAGS = {
  firstName: "FNAME",
  lastName: "LNAME",
  phone: "PHONE",
  company: "COMPANY",
  suburb: "SUBURB",
  currentOccupation: "OCCUP",
  postCode: "POSTCODE",
  cfmeuMember: "CFMEU",
  seekingConstructionWork: "MMERGE11",
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as RegisterPayload;

    const firstName = body.firstName?.trim();
    const lastName = body.lastName?.trim();
    const phone = body.phone?.trim() || body.mobile?.trim();
    const email = body.email?.trim().toLowerCase();

    const currentOccupation = body.currentOccupation?.trim();
    const company = body.company?.trim() || "";
    const suburb = body.suburb?.trim() || "";
    const postCode = body.postCode?.trim();
    const cfmeuMember = body.cfmeuMember?.trim();
    const seekingConstructionWork = body.seekingConstructionWork?.trim();

    const isWorkerRegistration =
      Boolean(currentOccupation) ||
      Boolean(postCode) ||
      Boolean(cfmeuMember) ||
      Boolean(seekingConstructionWork);

    if (!firstName || !lastName || !phone || !email) {
      return NextResponse.json(
        {
          message:
            "First name, last name, phone number, and email are required.",
        },
        { status: 400 }
      );
    }

    if (
      isWorkerRegistration &&
      (!currentOccupation ||
        !postCode ||
        !cfmeuMember ||
        !seekingConstructionWork)
    ) {
      return NextResponse.json(
        {
          message:
            "Current occupation, post code, CFMEU member status, and seeking work status are required.",
        },
        { status: 400 }
      );
    }

    if (
      isWorkerRegistration &&
      cfmeuMember &&
      !["Yes", "No"].includes(cfmeuMember)
    ) {
      return NextResponse.json(
        { message: "CFMEU member status must be Yes or No." },
        { status: 400 }
      );
    }

    if (
      isWorkerRegistration &&
      seekingConstructionWork &&
      !["Yes", "No"].includes(seekingConstructionWork)
    ) {
      return NextResponse.json(
        { message: "Seeking work status must be Yes or No." },
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

    const mergeFields: Record<string, string> = {
      [MERGE_TAGS.firstName]: firstName,
      [MERGE_TAGS.lastName]: lastName,
      [MERGE_TAGS.phone]: phone,
    };

    if (isWorkerRegistration) {
      mergeFields[MERGE_TAGS.currentOccupation] = currentOccupation || "";
      mergeFields[MERGE_TAGS.company] = company;
      mergeFields[MERGE_TAGS.suburb] = suburb;
      mergeFields[MERGE_TAGS.postCode] = postCode || "";
      mergeFields[MERGE_TAGS.cfmeuMember] = cfmeuMember || "";
      mergeFields[MERGE_TAGS.seekingConstructionWork] =
        seekingConstructionWork || "";
    }

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
        merge_fields: mergeFields,
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
      {
        message: isWorkerRegistration
          ? "Worker registration submitted successfully."
          : "Successfully registered interest.",
      },
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