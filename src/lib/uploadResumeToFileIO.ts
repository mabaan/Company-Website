export async function uploadResumeToFileIO(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("https://file.io", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Failed to upload resume");

  const json = await res.json();
  return json.link; // This is the downloadable URL
}
