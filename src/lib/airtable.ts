// src/lib/airtable.ts
import type { Attachment } from "airtable";

import Airtable, {
  type FieldSet,
  type Table,
  type Record as AirtableRecord,
} from "airtable";

// Airtable setup - only create base if API token is available
let base: ReturnType<InstanceType<typeof Airtable>['base']> | null = null;

function getBase() {
  if (!base && import.meta.env.AIRTABLE_TOKEN) {
    try {
      base = new Airtable({ apiKey: import.meta.env.AIRTABLE_TOKEN }).base(
        import.meta.env.AIRTABLE_BASE_ID as string
      );
    } catch (error) {
      console.warn("Failed to initialize Airtable base:", error);
      return null;
    }
  }
  return base;
}

export const APPLICATIONS_TABLE = import.meta.env
  .AIRTABLE_APPLICATIONS_TABLE as string;
export const JOBS_TABLE = import.meta.env.AIRTABLE_JOBS_TABLE as string;
export const NETWORKMAP_TABLE = import.meta.env
  .AIRTABLE_NETWORKMAP_NAME as string;
export const CONTACT_TABLE = import.meta.env.AIRTABLE_CONTACT_TABLE as string;

export { getBase as base };

// ----------------------
// ✅ Location Record Type
// ----------------------

export interface LocationRecord {
  id: string;
  Name: string;
  Latitude: number;
  Longitude: number;
  Type: string;
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
// ✅ Application Record Type
// ----------------------
export interface ApplicationFields extends FieldSet {
  "Application ID"?: number; // Read-only, auto number
  "First Name": string;
  "Last Name": string;
  Name?: string; // Formula
  Email: string;
  "Country Code": string;
  "Phone Number": string;
  Nationality: string;
  Gender: string;
  DOB: string;
  "Visa Status": string;
  Experience: number;
  LinkedIn?: string;
  About?: string;
  "Job Applied For": string[]; // Airtable record IDs
  "Job ID"?: number; // Lookup field
  "Resume URL"?: string; // Formula field
  "Submitted at"?: string;
}

function applicationsTable(): Table<ApplicationFields> | null {
  const baseInstance = getBase();
  if (!baseInstance) return null;
  return baseInstance<ApplicationFields>(APPLICATIONS_TABLE);
}

export async function createApplication(
  fields: ApplicationFields
): Promise<AirtableRecord<ApplicationFields>> {
  try {
    const table = applicationsTable();
    if (!table) {
      throw new Error("Airtable not available - missing API credentials");
    }
    const created = await table.create([{ fields }]);
    return created[0];
  } catch (error) {
    console.error("Error creating application record:", error);
    throw error;
  }
}

// ----------------------
// Contact Records
// ----------------------

export interface ContactFields extends FieldSet {
  Name: string;
  Company: string;
  Email: string;
  Phone: string;
  Message: string;
}

function contactTable(): Table<ContactFields> | null {
  const baseInstance = getBase();
  if (!baseInstance) return null;
  return baseInstance<ContactFields>(CONTACT_TABLE);
}

export async function createContact(
  fields: ContactFields
): Promise<AirtableRecord<ContactFields>> {
  try {
    const table = contactTable();
    if (!table) {
      throw new Error("Airtable not available - missing API credentials");
    }
    const created = await table.create([{ fields }]);
    return created[0];
  } catch (error) {
    console.error('Error creating contact record:', error);
    throw error;
  }
}
