import { selectSleigh, type Sleigh } from './selectSleigh'

interface TestCase {
  distance: number
  sleighs: Sleigh[]
  output: Sleigh['name'] | null
}

const testCases: TestCase[] = [
  {
    distance: 1,
    sleighs: [
      { name: 'pheralb', consumption: 0.3 },
      { name: 'TMChein', consumption: 0.5 }
    ],
    output: 'TMChein'
  },
  {
    distance: 10,
    sleighs: [
      { name: 'Pedrosillano', consumption: 1 },
      { name: 'SamarJaffal', consumption: 5 }
    ],
    output: 'Pedrosillano'
  },
  {
    distance: 10,
    sleighs: [
      { name: 'Pedrosillano', consumption: 1 },
      { name: 'SamarJaffal', consumption: 2 },
      { name: 'marcospage', consumption: 3 }
    ],
    output: 'SamarJaffal'
  },
  {
    distance: 50,
    sleighs: [
      { name: 'Pedrosillano', consumption: 1 },
      { name: 'SamarJaffal', consumption: 2 },
      { name: 'marcospage', consumption: 3 }
    ],
    output: null
  }
]

describe('[2022] 12 - selectSleigh', () => {
  it.each(testCases)('Test %#', ({ distance, sleighs, output }) => {
    expect(selectSleigh(distance, sleighs)).toBe(output)
  })
})
