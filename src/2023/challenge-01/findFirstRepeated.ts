export function findFirstRepeated (gifts: number[]): number {
  const giftMapped = new Set()

  for (const gift of gifts) {
    if (giftMapped.has(gift)) return gift
    giftMapped.add(gift)
  }

  return -1
}
