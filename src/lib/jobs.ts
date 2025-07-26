export interface Job {
  id: string;
  title: string;
  slug: string;
  department: string;
  location: string;
  employmentType: string;
  posted: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
}

export async function getJobs(): Promise<Job[]> {
  const token = import.meta.env.AIRTABLE_TOKEN;
  const baseId = import.meta.env.AIRTABLE_BASE_ID;
  const table = import.meta.env.AIRTABLE_JOBS_TABLE;

  // Correct Airtable formula to check if 'isActive' checkbox is TRUE
  const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(
    table
  )}?filterByFormula=IF({isActive}, TRUE(), FALSE())`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    console.error("Failed to fetch jobs:", await response.text());
    return [];
  }

  const data = await response.json();

  return (data.records || []).map(
    (record: any): Job => ({
      id: record.id,
      title: record.fields["Title"],
      slug: record.fields["Slug"],
      department: record.fields["Department"],
      location: record.fields["Location"],
      employmentType: record.fields["Employment Type"],
      posted: record.fields["Posted"],
      description: record.fields["Description"],
      responsibilities:
        typeof record.fields["Responsibilities"] === "string"
          ? record.fields["Responsibilities"].split("\n")
          : [],
      qualifications:
        typeof record.fields["Qualifications"] === "string"
          ? record.fields["Qualifications"].split("\n")
          : [],
    })
  );
}
