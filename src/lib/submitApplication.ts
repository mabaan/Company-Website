import { base, APPLICATIONS_TABLE, JOBS_TABLE } from "./airtable";
import { uploadResumeToCloudinary } from "./uploadResumeToCloudinary";

export async function submitToAirtable(data: Record<string, any>) {
  const { resume, jobRecordId } = data;


  // Step 1: Create application record (no Resume, no Resume URL)
  const [applicationRecord] = await base(APPLICATIONS_TABLE).create([
    {
      fields: {
        "First Name": data.firstName,
        "Last Name": data.lastName,
        Email: data.email,
        "Country Code": data.countryCode,
        "Phone Number": data.phone,
        Gender: data.gender,
        Nationality: data.nationality,
        DOB: data.dob,
        "Visa Status": data.visa,
        Experience: parseFloat(data.experience),
        LinkedIn: data.linkedin ?? "",
        About: data.about ?? "",
        "Job Applied For": [jobRecordId],
        // "Submitted at": new Date().toISOString(),
      },
    },
  ]);


  const applicationId = applicationRecord.fields["Application ID"] as
    | string
    | number;
  const applicationAirtableId = applicationRecord.id;

  if (!applicationId) {
    console.error("Application ID missing in record:", applicationRecord);
    throw new Error("Application ID is missing from Airtable response.");
  }

  // Step 2: Get Job ID (auto number) from linked Job
  const job = await base(JOBS_TABLE).find(jobRecordId);
  const jobId = job.fields["Job ID"] as string | number;


  if (!jobId) {
    console.error("Job ID missing in record:", job);
    throw new Error("Job ID is missing from job record.");
  }

  // Step 3: Upload resume to Cloudinary using IDs (no PATCH to Airtable)
  if (resume && resume instanceof File) {

    await uploadResumeToCloudinary(
      resume,
      jobId,
      applicationId
    );

    // Resume URL is computed automatically in Airtable via formula.
  } else {
    console.warn("No resume provided or file is not a valid File object.");
  }

  return applicationAirtableId;
}
