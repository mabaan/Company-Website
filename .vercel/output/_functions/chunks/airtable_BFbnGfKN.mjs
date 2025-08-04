import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(
  process.env.AIRTABLE_BASE_ID
);
const APPLICATIONS_TABLE = process.env.AIRTABLE_APPLICATIONS_TABLE;
process.env.AIRTABLE_JOBS_TABLE;
const NETWORKMAP_TABLE = process.env.AIRTABLE_NETWORKMAP_NAME;
const CONTACT_TABLE = "Contact";
async function fetchLocations() {
  const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${encodeURIComponent(NETWORKMAP_TABLE)}`;
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
        Accept: "application/json"
      }
    });
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Airtable fetch failed:", errorText);
      return [];
    }
    const data = await response.json();
    return (data.records || []).map(
      (record) => ({
        id: record.id,
        ...record.fields || {}
      })
    );
  } catch (err) {
    console.error("Network or parsing error:", err);
    return [];
  }
}
function contactTable() {
  return base(CONTACT_TABLE);
}
async function createContact(fields) {
  try {
    const table = contactTable();
    const created = await table.create([{ fields }]);
    return created[0];
  } catch (error) {
    console.error("Error creating contact record:", error);
    throw error;
  }
}

export { APPLICATIONS_TABLE as A, base as b, createContact as c, fetchLocations as f };
