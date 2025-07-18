// src/lib/airtable.ts

import Airtable from "airtable";

const base = new Airtable({ apiKey: import.meta.env.AIRTABLE_TOKEN }).base(
  import.meta.env.AIRTABLE_BASE_ID
);

export const APPLICATIONS_TABLE = import.meta.env.AIRTABLE_APPLICATIONS_TABLE;
export const JOBS_TABLE = import.meta.env.AIRTABLE_JOBS_TABLE;
export const NETWORKMAP_TABLE = import.meta.env.AIRTABLE_NETWORKMAP_NAME;

export { base };

export interface LocationRecord {
  id: string;
  Name: string;
  Latitude: number;
  Longitude: number;
  Type: "Headquarter" | "Agent" | "Distributor" | "QRC" | "Stock";
  Country?: string;
  City?: string;
  Description?: string;
}

export async function fetchLocations(): Promise<LocationRecord[]> {
  const token = import.meta.env.AIRTABLE_TOKEN;
  const baseId = import.meta.env.AIRTABLE_BASE_ID;
  const table = import.meta.env.AIRTABLE_NETWORKMAP_NAME;

  const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(
    table
  )}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
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
