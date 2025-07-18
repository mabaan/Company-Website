// src/lib/submitApplication.ts

import { base, APPLICATIONS_TABLE } from "./airtable";
import { uploadResumeToFileIO } from "./uploadResumeToFileIO";
import type { Attachment, FieldSet } from "airtable";

export async function submitToAirtable(data: Record<string, any>) {
  try {
    let resumeUrl = "";

    if (data.resume instanceof File) {
      resumeUrl = await uploadResumeToFileIO(data.resume);
    }

    const newRecord: Record<string, any> = {
      "First Name": data.firstName,
      "Last Name": data.lastName,
      Email: data.email,
      Phone: `${data.countryCode} ${data.phone}`,
      Gender: data.gender,
      Nationality: data.nationality,
      "Date of Birth": data.dob,
      "Visa Status": data.visa,
      Experience: data.experience,
      LinkedIn: data.linkedin || "N/A",
      About: data.about,
      "Job Title": data.jobTitle,
      Resume: resumeUrl
        ? [
            {
              url: resumeUrl,
              filename: "resume.pdf",
            } as Partial<Attachment>,
          ]
        : [],
      "Submitted At": new Date().toISOString(),
    };

    const created = await base(APPLICATIONS_TABLE).create([
      {
        fields: newRecord,
      },
    ]);

    return created[0].id;
  } catch (err) {
    console.error("Failed to submit to Airtable:", err);
    throw new Error("Submission failed.");
  }
}
