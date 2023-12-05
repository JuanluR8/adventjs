import { checkPart } from './checkPart'

interface TestCase {
  part: string
  output: boolean
}

const testCases: TestCase[] = [
  {
    part: 'uwu',
    output: true
  },
  {
    part: 'midu',
    output: false
  },
  {
    part: 'lolol',
    output: true
  },
  {
    part: 'yolooloy',
    output: true
  },
  {
    part: 'zzzoonzzz',
    output: true
  }
]

describe('[2022] 08 - checkPart', () => {
  it.each(testCases)('Test %#', ({ part, output }) => {
    expect(checkPart(part)).toEqual(output)
  })
})
