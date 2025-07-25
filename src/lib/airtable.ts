// src/lib/airtable.ts

import Airtable, { type Table, type Record as AirtableRecord } from "airtable";
import type { FieldSet } from "airtable";

// Airtable setup
const base = new Airtable({ apiKey: import.meta.env.AIRTABLE_TOKEN }).base(
  import.meta.env.AIRTABLE_BASE_ID as string
);

// Table names from environment
export const APPLICATIONS_TABLE = import.meta.env
  .AIRTABLE_APPLICATIONS_TABLE as string;
export const JOBS_TABLE = import.meta.env.AIRTABLE_JOBS_TABLE as string;
export const NETWORKMAP_TABLE = import.meta.env
  .AIRTABLE_NETWORKMAP_NAME as string;

export { base };

// ----------------------
// Location Records
// ----------------------

export interface LocationRecord {
  id: string;
  Name: string;
  Latitude: number;
  Longitude: number;
  Type: string; // e.g., "Headquarters", "Partner", "End User"
  Country?: string;
  City?: string;
  Description?: string;
  Website?: string;
}

export async function fetchLocations(): Promise<LocationRecord[]> {
  const url = `https://api.airtable.com/v0/${
    import.meta.env.AIRTABLE_BASE_ID
  }/${encodeURIComponent(NETWORKMAP_TABLE)}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${import.meta.env.AIRTABLE_TOKEN}`,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Airtable fetch failed:", errorText);
      return [];
    }

    const data = await response.json();

    return (data.records || []).map(
      (record: { id: string; fields?: Record<string, any> }) => ({
        id: record.id,
        ...(record.fields || {}),
      })
    ) as LocationRecord[];
  } catch (err) {
    console.error("Network or parsing error:", err);
    return [];
  }
}

// ----------------------
// Application Records
// ----------------------

export interface ApplicationFields extends FieldSet {
  Name: string;
  Email: string;
  Country: string;
  JobSlug: string;
  ResumeUrl?: string;
  [key: string]: any;
}

// Strongly-typed accessor for applications table
function applicationsTable(): Table<ApplicationFields> {
  return base<ApplicationFields>(APPLICATIONS_TABLE);
}

export async function createApplication(
  fields: ApplicationFields
): Promise<AirtableRecord<ApplicationFields>> {
  try {
    const table = applicationsTable();
    const created = await table.create([{ fields }]);
    return created[0];
  } catch (error) {
    console.error("Error creating application record:", error);
    throw error;
  }
}
