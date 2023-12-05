import { distributeGifts } from './distributeGifts'

interface TestCase {
  packOfGifts: string[]
  reindeers: string[]
  output: number
}

const testCases: TestCase[] = [
  {
    packOfGifts: ['book', 'doll', 'ball'],
    reindeers: ['dasher', 'dancer'],
    output: 2
  },
  {
    packOfGifts: ['a', 'b', 'c'],
    reindeers: ['d', 'e'],
    output: 1
  },
  {
    packOfGifts: ['videogames', 'console'],
    reindeers: ['midu'],
    output: 0
  },
  {
    packOfGifts: ['game', 'videoconsole', 'computer'],
    reindeers: ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'],
    output: 5
  },
  {
    packOfGifts: ['music'],
    reindeers: ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'],
    output: 26
  }
]

describe('[2022] 03 - distributeGifts', () => {
  it.each(testCases)('Test %#', ({ packOfGifts, reindeers, output }) => {
    expect(distributeGifts(packOfGifts, reindeers)).toBe(output)
  })
})
