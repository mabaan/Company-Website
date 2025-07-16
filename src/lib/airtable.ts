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
  const table = import.meta.env.AIRTABLE_TABLE_NAME;

  const url = `https://api.airtable.com/v0/${baseId}/${table}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    console.error("Failed to fetch Airtable data", await response.text());
    return [];
  }

  const data = await response.json();

  return data.records.map(
    (record: { id: string; fields: Record<string, any> }) => ({
      id: record.id,
      ...record.fields,
    })
  ) as LocationRecord[];
}
