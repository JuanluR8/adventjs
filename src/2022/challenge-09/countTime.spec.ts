import { countTime, type LedState } from './countTime'

interface TestCase {
  leds: LedState[]
  output: number
}

const testCases: TestCase[] = [
  {
    leds: [0, 1, 1, 0, 1],
    output: 7
  },
  {
    leds: [0, 0, 0, 1],
    output: 21
  },
  {
    leds: [0, 0, 1, 0, 0],
    output: 28
  },
  {
    leds: [1, 0, 0, 1, 0, 0],
    output: 14
  },
  {
    leds: [1, 1, 0, 0, 0, 0],
    output: 28
  },
  {
    leds: [1, 1, 1],
    output: 0
  }
]

describe('[2022] 09 - countTime', () => {
  it.each(testCases)('Test %#', ({ leds, output }) => {
    expect(countTime(leds)).toEqual(output)
  })
})
