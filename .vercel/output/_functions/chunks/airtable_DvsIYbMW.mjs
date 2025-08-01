import 'airtable';

let base = null;
function getBase() {
  return base;
}
const APPLICATIONS_TABLE = undefined                                           ;
const NETWORKMAP_TABLE = undefined                                        ;
const CONTACT_TABLE = undefined                                      ;
async function fetchLocations() {
  const url = `https://api.airtable.com/v0/${undefined                                }/${encodeURIComponent(NETWORKMAP_TABLE)}`;
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${undefined                              }`,
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
  const baseInstance = getBase();
  if (!baseInstance) return null;
  return baseInstance(CONTACT_TABLE);
}
async function createContact(fields) {
  try {
    const table = contactTable();
    if (!table) {
      throw new Error("Airtable not available - missing API credentials");
    }
    const created = await table.create([{ fields }]);
    return created[0];
  } catch (error) {
    console.error("Error creating contact record:", error);
    throw error;
  }
}

export { APPLICATIONS_TABLE as A, createContact as c, fetchLocations as f, getBase as g };
