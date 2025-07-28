export function getPostDescription(
  body: any[],
  maxLength: number = 160
): string {
  if (!body || !Array.isArray(body)) return "";

  for (const block of body) {
    if (block._type === "block" && Array.isArray(block.children)) {
      const text = block.children.map((child: any) => child.text).join(" ");
      if (text.trim()) {
        return text.slice(0, maxLength).trim();
      }
    }
  }

  return "";
}
