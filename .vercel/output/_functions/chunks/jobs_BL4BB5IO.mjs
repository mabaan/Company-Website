async function getJobs() {
  const token = undefined                              ;
  const baseId = undefined                                ;
  const table = undefined                                   ;
  const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(
    table
  )}?filterByFormula=IF({isActive}, TRUE(), FALSE())`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json"
    }
  });
  if (!response.ok) {
    console.error("Failed to fetch jobs:", await response.text());
    return [];
  }
  const data = await response.json();
  return (data.records || []).map(
    (record) => ({
      id: record.id,
      // ✅ record ID from Airtable
      jobId: record.fields["Job ID"],
      title: record.fields["Title"],
      slug: record.fields["Slug"],
      department: record.fields["Department"],
      location: record.fields["Location"],
      employmentType: record.fields["Employment Type"],
      posted: record.fields["Posted"],
      description: record.fields["Description"],
      responsibilities: typeof record.fields["Responsibilities"] === "string" ? record.fields["Responsibilities"].split("\n") : [],
      qualifications: typeof record.fields["Qualifications"] === "string" ? record.fields["Qualifications"].split("\n") : []
    })
  );
}

export { getJobs as g };
