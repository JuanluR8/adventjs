import { checkJump } from './checkJump'

interface TestCase {
  heights: number[]
  output: boolean
}

const testCases: TestCase[] = [
  {
    heights: [1, 2, 1],
    output: true
  },
  {
    heights: [1, 3, 8, 5, 2],
    output: true
  },
  {
    heights: [1, 7, 3, 5],
    output: false
  },
  {
    heights: [1, 2, 3, 2, 1],
    output: true
  },
  {
    heights: [1, 2, 2, 2, 1],
    output: true
  },
  {
    heights: [0, 1, 0],
    output: true
  },
  {
    heights: [2, 2, 2, 2],
    output: false
  },
  {
    heights: [1, 2, 3],
    output: false
  },
  {
    heights: [1, 2, 3, 2, 1, 2, 3],
    output: false
  },
  {
    heights: [1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
    output: true
  },
  {
    heights: [1, 2, 3, 1, 3, 1],
    output: false
  },
  {
    heights: [1, 3, 2, 5, 4, 3, 2, 1],
    output: false
  }
]

describe('[2022] 10 - checkJump', () => {
  it.each(testCases)('Test %#', ({ heights, output }) => {
    expect(checkJump(heights)).toBe(output)
  })
})
