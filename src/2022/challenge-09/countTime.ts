export type LedState = 0 | 1

export function countTime (leds: LedState[]): number {
  const CHANGE_TIME = 7

  const strip = leds
    .join('')
    .split('1')

  strip[0] += strip.at(-1)

  const longestSequenceLength = strip
    .reduce((acc, partialStrip) => {
      return Math.max(acc, partialStrip.length)
    }, 0)

  return longestSequenceLength * CHANGE_TIME
}
