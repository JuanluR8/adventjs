import { cyberReindeer } from './cyberReindeer'

interface TestCase {
  road: string
  time: number
  output: string[]
}

const testCases: TestCase[] = [
  {
    road: 'S..|...|..',
    time: 10,
    output: [
      'S..|...|..', // estado inicial
      '.S.|...|..', // avanza el trineo la carretera
      '..S|...|..', // avanza el trineo la carretera
      '..S|...|..', // el trineo para en la barrera
      '..S|...|..', // el trineo para en la barrera
      '...S...*..', // se abre la barrera, el trineo avanza
      '...*S..*..', // avanza el trineo la carretera
      '...*.S.*..', // avanza el trineo la carretera
      '...*..S*..', // avanza el trineo la carretera
      '...*...S..' // avanza por la barrera abierta
    ]
  },
  {
    road: 'S.|.',
    time: 4,
    output: [
      'S.|.',
      '.S|.',
      '.S|.',
      '.S|.'
    ]
  },
  {
    road: 'S.|.|.',
    time: 7,
    output: [
      'S.|.|.',
      '.S|.|.',
      '.S|.|.',
      '.S|.|.',
      '.S|.|.',
      '..S.*.',
      '..*S*.'
    ]
  },
  {
    road: 'S.|..',
    time: 6,
    output: [
      'S.|..',
      '.S|..',
      '.S|..',
      '.S|..',
      '.S|..',
      '..S..'
    ]
  },
  {
    road: 'S.|.|.|......|.||.........',
    time: 8,
    output: [
      'S.|.|.|......|.||.........',
      '.S|.|.|......|.||.........',
      '.S|.|.|......|.||.........',
      '.S|.|.|......|.||.........',
      '.S|.|.|......|.||.........',
      '..S.*.*......*.**.........',
      '..*S*.*......*.**.........',
      '..*.S.*......*.**.........'
    ]
  }
]

describe('05 - cyberReinder', () => {
  it.each(testCases)('Test %#', ({ road, time, output }) => {
    const result = cyberReindeer(road, time)

    expect(result).toHaveLength(time)
    result.forEach(partialResult => {
      expect(partialResult).toHaveLength(road.length)
    })
    expect(result).toStrictEqual(output)
  })
})
