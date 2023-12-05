import { getCompleted } from './getCompleted'

interface TestCase {
  part: string
  total: string
  output: string
}

const testCases: TestCase[] = [
  {
    part: '01:00:00',
    total: '03:00:00',
    output: '1/3'
  },
  {
    part: '02:00:00',
    total: '04:00:00',
    output: '1/2'
  },
  {
    part: '01:00:00',
    total: '01:00:00',
    output: '1/1'
  },
  {
    part: '00:10:00',
    total: '01:00:00',
    output: '1/6'
  },
  {
    part: '01:10:10',
    total: '03:30:30',
    output: '1/3'
  },
  {
    part: '02:20:20',
    total: '03:30:30',
    output: '2/3'
  },
  {
    part: '03:30:30',
    total: '05:50:50',
    output: '3/5'
  }
]

describe('[2022] 11 - getCompleted', () => {
  it.each(testCases)('Test %#', ({ part, total, output }) => {
    expect(getCompleted(part, total)).toEqual(output)
  })
})
