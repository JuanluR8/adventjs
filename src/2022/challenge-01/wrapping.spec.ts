import { wrapping } from './wrapping'

interface TestCase {
  gifts: string[]
  output: string[]
}

const testCases: TestCase[] = [
  {
    gifts: ['cat', 'game', 'socks'],
    output: [
      '*****\n*cat*\n*****',
      '******\n*game*\n******',
      '*******\n*socks*\n*******'
    ]
  },
  {
    gifts: ['midu'],
    output: [
      '******\n*midu*\n******'
    ]
  },
  {
    gifts: ['a'],
    output: [
      '***\n*a*\n***'
    ]
  },
  {
    gifts: [],
    output: []
  }
]

describe('[2022] 01 - wrapping', () => {
  it.each(testCases)('Test %#', ({ gifts, output }) => {
    expect(wrapping(gifts)).toStrictEqual(output)
  })
})
