import { createClient } from '@sanity/client';

const client = createClient({
  projectId: "1nyfptqq",
  // e.g., '1nyfptqq'
  dataset: "production",
  // or whatever dataset you use
  apiVersion: "2023-01-01",
  // use a fixed version
  useCdn: true
  // true for cached public content
});

function getPostDescription(body, maxLength = 160) {
  if (!body || !Array.isArray(body)) return "";
  for (const block of body) {
    if (block._type === "block" && Array.isArray(block.children)) {
      const text = block.children.map((child) => child.text).join(" ");
      if (text.trim()) {
        return text.slice(0, maxLength).trim();
      }
    }
  }
  return "";
}

export { client as c, getPostDescription as g };
