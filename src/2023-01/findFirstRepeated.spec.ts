import { findFirstRepeated } from './findFirstRepeated'

const testCases = [
  {
    input: [2, 1, 3, 5, 3, 2],
    output: 3
  },
  {
    input: [2, 2],
    output: 2
  },
  {
    input: [2, 4, 3, 5, 1],
    output: -1
  },
  {
    input: [1],
    output: -1
  },
  {
    input: [],
    output: -1
  },
  {
    input: [10, 20, 30],
    output: -1
  },
  {
    input: [1, 2, 3, 4],
    output: -1
  },
  {
    input: [5, 1, 2, 3, 2, 5, 1],
    output: 2
  },
  {
    input: [12, 20, 30, 11, 20, 12],
    output: 20
  },
  {
    input: [5, 1, 5, 1],
    output: 5
  }
]

describe('01 - findFirstRepeated', () => {
  it.each(testCases)('should return $output', ({ input, output }) => {
    expect(findFirstRepeated(input)).toBe(output)
  })
})
