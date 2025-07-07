export async function getAnime() {
  const mod = await import("animejs");
  return (mod as any).anime || (mod as any).default || mod;
}
