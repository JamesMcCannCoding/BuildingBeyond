import { NextResponse } from "next/server";
import { createHash } from "crypto";

type WorkerRegistrationPayload = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  currentOccupation?: string;
  company?: string;
  postCode?: string;
  cfmeuMember?: string;
  seekingConstructionWork?: string;
};

const MAILCHIMP_TAG = "buildingbeyond2032-worker-registration";

const MERGE_TAGS = {
  firstName: "FNAME",
  lastName: "LNAME",
  phone: "PHONE",
  currentOccupation: "OCCUP",
  company: "COMPANY",
  postCode: "POSTCODE",
  cfmeuMember: "CFMEU",
  seekingConstructionWork: "SEEKWORK",
};

export async function GET() {
  return NextResponse.json(
    { message: "Worker registration API route is working." },
    { status: 200 }
  );
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as WorkerRegistrationPayload;

    const firstName = body.firstName?.trim();
    const lastName = body.lastName?.trim();
    const phone = body.phone?.trim();
    const email = body.email?.trim().toLowerCase();
    const currentOccupation = body.currentOccupation?.trim();
    const company = body.company?.trim() || "";
    const postCode = body.postCode?.trim();
    const cfmeuMember = body.cfmeuMember?.trim();
    const seekingConstructionWork = body.seekingConstructionWork?.trim();

    if (
      !firstName ||
      !lastName ||
      !phone ||
      !email ||
      !currentOccupation ||
      !postCode ||
      !cfmeuMember ||
      !seekingConstructionWork
    ) {
      return NextResponse.json(
        {
          message:
            "First name, last name, phone, email, current occupation, post code, CFMEU member status, and seeking work status are required.",
        },
        { status: 400 }
      );
    }

    if (!["Yes", "No"].includes(cfmeuMember)) {
      return NextResponse.json(
        { message: "CFMEU member status must be Yes or No." },
        { status: 400 }
      );
    }

    if (!["Yes", "No"].includes(seekingConstructionWork)) {
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

    const subscriberHash = createHash("md5").update(email).digest("hex");

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
          [MERGE_TAGS.firstName]: firstName,
          [MERGE_TAGS.lastName]: lastName,
          [MERGE_TAGS.phone]: phone,
          [MERGE_TAGS.currentOccupation]: currentOccupation,
          [MERGE_TAGS.company]: company,
          [MERGE_TAGS.postCode]: postCode,
          [MERGE_TAGS.cfmeuMember]: cfmeuMember,
          [MERGE_TAGS.seekingConstructionWork]: seekingConstructionWork,
        },
      }),
    });

    const memberData = await memberResponse.json();

    if (!memberResponse.ok) {
      console.error("Mailchimp worker registration member error:", memberData);

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

    const tagsToApply = [
      {
        name: MAILCHIMP_TAG,
        status: "active",
      },
    ];

    if (cfmeuMember === "Yes") {
      tagsToApply.push({
        name: "Current CFMEU Member",
        status: "active",
      });
    }

    if (seekingConstructionWork === "Yes") {
      tagsToApply.push({
        name: "Seeking Construction Work",
        status: "active",
      });
    }

    const tagResponse = await fetch(tagUrl, {
      method: "POST",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tags: tagsToApply,
      }),
    });

    if (!tagResponse.ok) {
      const tagData = await tagResponse.json();

      console.error("Mailchimp worker registration tag error:", tagData);

      return NextResponse.json(
        {
          message:
            tagData.detail ||
            "The contact was added, but the Mailchimp tags could not be applied.",
        },
        { status: tagResponse.status }
      );
    }

    return NextResponse.json(
      { message: "Worker registration submitted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Worker registration error:", error);

    return NextResponse.json(
      { message: "Unexpected server error." },
      { status: 500 }
    );
  }
}