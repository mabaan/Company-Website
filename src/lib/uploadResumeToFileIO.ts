export async function uploadResumeToFileIO(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await fetch("https://tmpfiles.org/api/v1/upload", {
      method: "POST",
      body: formData,
    });

    const contentType = res.headers.get("content-type");
    console.log("tmpfiles response content-type:", contentType);

    const data = await res.json();
    console.log("tmpfiles upload response:", data);

    if (!res.ok || !data?.data?.url) {
      throw new Error(`Upload failed: ${data?.message || "Unknown error"}`);
    }

    return data.data.url;
  } catch (err) {
    console.error("Error uploading to tmpfiles:", err);
    throw err;
  }
}
