import { decorateTree } from './decorateTree'

interface TestCase {
  base: string
  output: string[]
}

const testCases: TestCase[] = [
  {
    base: 'B P R P',
    output: [
      'R',
      'P B',
      'R B B',
      'B P R P'
    ]
  },
  {
    base: 'B B',
    output: [
      'B',
      'B B'
    ]
  },
  {
    base: 'B B P R P R R',
    output: [
      'B',
      'R P',
      'B P P',
      'P R B R',
      'P P B B P',
      'B R B B B R',
      'B B P R P R R'
    ]
  },
  {
    base: 'R R P R R',
    output: [
      'R',
      'R R',
      'P B P',
      'R B B R',
      'R R P R R'
    ]
  }
]

describe('[2022] 15 - decorateTree', () => {
  it.each(testCases)('Test %#', ({ base, output }) => {
    expect(decorateTree(base)).toStrictEqual(output)
  })
})
