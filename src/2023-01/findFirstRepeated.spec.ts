import { findFirstRepeated } from './findFirstRepeated'

interface TestCase {
  gifts: number[]
  output: number
}

const testCases: TestCase[] = [
  {
    gifts: [2, 1, 3, 5, 3, 2],
    output: 3
  },
  {
    gifts: [2, 2],
    output: 2
  },
  {
    gifts: [2, 4, 3, 5, 1],
    output: -1
  },
  {
    gifts: [1],
    output: -1
  },
  {
    gifts: [],
    output: -1
  },
  {
    gifts: [10, 20, 30],
    output: -1
  },
  {
    gifts: [1, 2, 3, 4],
    output: -1
  },
  {
    gifts: [5, 1, 2, 3, 2, 5, 1],
    output: 2
  },
  {
    gifts: [12, 20, 30, 11, 20, 12],
    output: 20
  },
  {
    gifts: [5, 1, 5, 1],
    output: 5
  }
]

describe('01 - findFirstRepeated', () => {
  it.each(testCases)('Test %#', ({ gifts, output }) => {
    expect(findFirstRepeated(gifts)).toBe(output)
  })
})
