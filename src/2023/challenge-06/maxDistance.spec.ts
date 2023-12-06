import { maxDistance } from './maxDistance'

interface TestCase {
  movements: string
  output: number
}

const testCases: TestCase[] = [
  {
    movements: '>>*<',
    output: 2
  },
  {
    movements: '<<<<<',
    output: 5
  },
  {
    movements: '>***>',
    output: 5
  },
  {
    movements: '**********',
    output: 10
  },
  {
    movements: '<<**>>',
    output: 2
  }
]

describe('[2023] 06 - maxDistance', () => {
  it.each(testCases)('Test %#', ({ movements, output }) => {
    expect(maxDistance(movements)).toBe(output)
  })
})
