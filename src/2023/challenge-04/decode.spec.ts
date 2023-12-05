import { decode } from './decode'

interface TestCase {
  message: string
  output: string
}

const testCases: TestCase[] = [
  {
    message: 'hola (odnum)',
    output: 'hola mundo'
  },
  {
    message: '(olleh) (dlrow)!',
    output: 'hello world!'
  },
  {
    message: 'sa(u(cla)atn)s',
    output: 'santaclaus'
  },
  {
    message: '((nta)(sa))',
    output: 'santa'
  },
  {
    message: '(ab(dc)(fe))',
    output: 'fedcba'
  },
  {
    message: 'ab(cd)ef',
    output: 'abdcef'
  },
  {
    message: 'plain',
    output: 'plain'
  }

]

describe('[2023] 04 - decode', () => {
  it.each(testCases)('Test %#', ({ message, output }) => {
    expect(decode(message)).toEqual(output)
  })
})
