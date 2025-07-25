export async function uploadResumeToFileIO(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch("https://file.io", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("Resume upload failed:", errorText);
    throw new Error(
      "Failed to upload resume. Server responded with non-OK status."
    );
  }

  const json = (await res.json()) as {
    success: boolean;
    link?: string;
    message?: string;
  };

  if (!json.success || !json.link) {
    console.error("Unexpected file.io response:", json);
    throw new Error("Resume upload failed. Invalid response from file.io.");
  }

  return json.link;
}
