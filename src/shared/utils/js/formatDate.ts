export function formatDate(s: number): number {
  const dateInMs = s * 1000;
  return Math.round((Date.now() - dateInMs) / 3600000);
}
