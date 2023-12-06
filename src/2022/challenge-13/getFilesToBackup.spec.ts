import { getFilesToBackup, type Change } from './getFilesToBackup'

interface TestCase {
  lastBackup: number
  changes: Change[]
  output: Array<Change[0]>
}

const testCases: TestCase[] = [
  {
    lastBackup: 1546300800,
    changes: [
      [3, 1546301100],
      [2, 1546300800],
      [1, 1546300800],
      [1, 1546300900],
      [1, 1546301000]
    ],
    output: [1, 3]
  },
  {
    lastBackup: 1546300600,
    changes: [
      [1, 1546300800],
      [2, 1546300800],
      [1, 1546300900],
      [1, 1546301000],
      [3, 1546301100]
    ],
    output: [1, 2, 3]
  },
  {
    lastBackup: 1556300600,
    changes: [
      [1, 1546300800],
      [2, 1546300800],
      [1, 1546300900],
      [1, 1546301000],
      [3, 1546301100]
    ],
    output: []
  },
  {
    lastBackup: 1556300600,
    changes: [],
    output: []
  }
]

describe('[2022] 13 - getCompleted', () => {
  it.each(testCases)('Test %#', ({ lastBackup, changes, output }) => {
    expect(getFilesToBackup(lastBackup, changes)).toStrictEqual(output)
  })
})
