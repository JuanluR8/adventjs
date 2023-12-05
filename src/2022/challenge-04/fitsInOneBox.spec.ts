import { fitsInOneBox, type Box } from './fitsInOneBox'

interface TestCase {
  boxes: Box[]
  output: boolean
}

const testCases: TestCase[] = [
  {
    boxes: [
      { l: 1, w: 1, h: 10 },
      { l: 3, w: 3, h: 12 },
      { l: 2, w: 2, h: 1 }
    ],
    output: false
  },
  {
    boxes: [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 }
    ],
    output: true
  },
  {
    boxes: [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 3, w: 1, h: 3 }
    ],
    output: false
  },
  {
    boxes: [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 2, w: 10, h: 2 }
    ],
    output: false
  },
  {
    boxes: [
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 }
    ],
    output: true
  }
]

describe('[2022] 04 - fitsInOneBox', () => {
  it.each(testCases)('Test %#', ({ boxes, output }) => {
    expect(fitsInOneBox(boxes)).toBe(output)
  })
})
