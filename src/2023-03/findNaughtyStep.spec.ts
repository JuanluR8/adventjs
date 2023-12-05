import { findNaughtyStep } from './findNaughtyStep'

interface TestCase {
  original: string
  modified: string
  output: string
}

const testCases: TestCase[] = [
  {
    original: 'abcd',
    modified: 'abcde',
    output: 'e'
  },
  {
    original: 'abcde',
    modified: 'abcd',
    output: 'e'
  },
  {
    original: 'xxxx',
    modified: 'xxoxx',
    output: 'o'
  },
  {
    original: 'stepfor',
    modified: 'stepor',
    output: 'f'
  },
  {
    original: 'iiiii',
    modified: 'iiiii',
    output: ''
  }
]

describe('03 - findNaughtyStep', () => {
  it.each(testCases)('Test %#', ({ original, modified, output }) => {
    expect(findNaughtyStep(original, modified)).toEqual(output)
  })
})
