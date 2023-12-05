export function distributeGifts (packOfGifts: string[], reindeers: string[]): number {
  const calcWeight = (list: string[], multiplier: number): number => {
    return list.reduce((acc, elem) => acc + (elem.length * multiplier), 0)
  }

  const giftsWeight = calcWeight(packOfGifts, 1)
  const reindeersWeight = calcWeight(reindeers, 2)

  return Math.floor(reindeersWeight / giftsWeight)
}
