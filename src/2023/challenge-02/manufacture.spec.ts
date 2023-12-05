import { manufacture } from './manufacture'

interface TestCase {
  gifts: string[]
  materials: string
  output: string[]
}

const testCases: TestCase[] = [
  {
    gifts: ['tren', 'oso', 'pelota'],
    materials: 'tronesa',
    output: ['tren', 'oso']
  },
  {
    gifts: ['coche', 'muñeca', 'balon'],
    materials: 'ocmuñalb',
    output: []
  },
  {
    gifts: ['patineta', 'robot', 'libro'],
    materials: 'nopor',
    output: []
  },
  {
    gifts: [],
    materials: 'letras',
    output: []
  }
]

describe('[2023] 02 - manufacture', () => {
  it.each(testCases)('Test %#', ({ gifts, materials, output }) => {
    expect(manufacture(gifts, materials)).toStrictEqual(output)
  })
})
