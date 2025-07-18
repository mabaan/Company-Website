import Airtable from "airtable";

const base = new Airtable({
  apiKey: import.meta.env.AIRTABLE_TOKEN, // uses your personal access token
}).base(import.meta.env.AIRTABLE_BASE_ID);

export async function getJobs() {
  const records = await base(import.meta.env.AIRTABLE_JOBS_TABLE)
    .select({
      filterByFormula: "IsActive = TRUE()",
      sort: [{ field: "Posted", direction: "desc" }],
    })
    .all();

  return records.map((record) => ({
    id: record.id,
    title: record.get("Title"),
    department: record.get("Department"),
    location: record.get("Location"),
    slug: record.get("Slug"),
    posted: record.get("Posted"),
    description: record.get("Description"),
  }));
}
