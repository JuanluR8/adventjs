import { getOptimalPath } from './getOptimalPath'

interface TestCase {
  path: number[][]
  output: number
}

const testCases: TestCase[] = [
  {
    path: [[0], [7, 4], [2, 4, 6]],
    output: 8
  },
  {
    path: [[0], [2, 3]],
    output: 2
  },
  {
    path: [[0], [3, 4], [9, 8, 1]],
    output: 5
  },
  {
    path: [[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]],
    output: 8
  },
  {
    path: [[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1]],
    output: 7
  }
]

describe('[2022] 14 - getOptimalPath', () => {
  it.each(testCases)('Test %#', ({ path, output }) => {
    expect(getOptimalPath(path)).toBe(output)
  })
})
