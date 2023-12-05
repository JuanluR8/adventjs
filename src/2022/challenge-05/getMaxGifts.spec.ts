import { getMaxGifts } from './getMaxGifts'

interface TestCase {
  giftsCities: number[]
  maxGifts: number
  maxCities: number
  output: number
}

const testCases: TestCase[] = [
  {
    giftsCities: [12, 3, 11, 5, 7],
    maxGifts: 20,
    maxCities: 3,
    output: 20
  },
  {
    giftsCities: [50],
    maxGifts: 15,
    maxCities: 1,
    output: 0
  },
  {
    giftsCities: [50],
    maxGifts: 100,
    maxCities: 1,
    output: 50
  },
  {
    giftsCities: [50, 70],
    maxGifts: 100,
    maxCities: 1,
    output: 70
  },
  {
    giftsCities: [50, 70, 30],
    maxGifts: 100,
    maxCities: 2,
    output: 100
  }
]

describe('[2022] 04 - fitsInOneBox', () => {
  it.each(testCases)('Test %#', ({ giftsCities, maxGifts, maxCities, output }) => {
    expect(getMaxGifts(giftsCities, maxGifts, maxCities)).toBe(output)
  })
})
