import { countHours } from './countHours'

interface TestCase {
  year: number
  holidays: string[]
  output: number
}

const testCases: TestCase[] = [
  {
    year: 2023,
    holidays: ['01/06', '04/01', '12/25'],
    output: 4
  },
  {
    year: 2022,
    holidays: ['01/06', '04/01', '12/25'],
    output: 4
  },
  {
    year: 1985,
    holidays: ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25'],
    output: 10
  },
  {
    year: 2000,
    holidays: ['01/01'],
    output: 0
  }
]

describe('[2022] 02 - countHours', () => {
  it.each(testCases)('Test %#', ({ year, holidays, output }) => {
    expect(countHours(year, holidays)).toBe(output)
  })
})
