export function getMaxGifts (giftsCities: number[], maxGifts: number, maxCities: number): number {
  return giftsCities
    .sort((a, b) => b - a)
    .reduce((acc, city) => {
      const sum = acc + city
      const canFollowConditions = [
        maxCities > 0,
        sum <= maxGifts,
        sum !== maxGifts - 1
      ]

      if (canFollowConditions.every(condition => condition)) {
        maxCities -= 1
        acc = sum
      }
      return acc
    }, 0)
}
