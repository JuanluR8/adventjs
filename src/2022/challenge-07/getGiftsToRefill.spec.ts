import { getGiftsToRefill } from './getGiftsToRefill'

interface TestCase {
  a1: string[]
  a2: string[]
  a3: string[]
  output: string[]
}

const testCases: TestCase[] = [
  {
    a1: ['bici', 'coche', 'bici', 'bici'],
    a2: ['coche', 'bici', 'muñeca', 'coche'],
    a3: ['bici', 'pc', 'pc'],
    output: ['muñeca', 'pc']
  },
  {
    a1: [],
    a2: [],
    a3: [],
    output: []
  },
  {
    a1: ['a', 'a'],
    a2: ['a', 'a'],
    a3: ['a', 'a'],
    output: []
  },
  {
    a1: ['a', 'a'],
    a2: ['b', 'b'],
    a3: ['c', 'c'],
    output: ['a', 'b', 'c']
  },
  {
    a1: ['a', 'b'],
    a2: ['c', 'd'],
    a3: ['e', 'f'],
    output: ['a', 'b', 'c', 'd', 'e', 'f']
  }
]

describe('[2022] 07 - getGiftsToRefill', () => {
  it.each(testCases)('Test %#', ({ a1, a2, a3, output }) => {
    expect(getGiftsToRefill(a1, a2, a3)).toStrictEqual(output)
  })
})
