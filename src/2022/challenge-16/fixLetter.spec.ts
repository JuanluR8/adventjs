import { fixLetter } from './fixLetter'

interface TestCase {
  letter: string
  output: string
}

const testCases: TestCase[] = [
  {
    letter: ' hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  ',
    output: 'Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.'
  },
  {
    letter: "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?",
    output: "Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?"
  },
  {
    letter: '  hi    santa    claus ',
    output: 'Hi Santa Claus.'
  },
  {
    letter: '  hi    santa    claus . santa claus is the best  ',
    output: 'Hi Santa Claus. Santa Claus is the best.'
  },
  {
    letter: '  hi,santa claus. are you there ?   ',
    output: 'Hi, Santa Claus. Are you there?'
  },
  {
    letter: 'Hey santa Claus .  I want a bike.   I want a videogame! ',
    output: 'Hey Santa Claus. I want a bike. I want a videogame!'
  }
]

describe('[2022] 16 - fixLetter', () => {
  it.each(testCases)('Test %#', ({ letter, output }) => {
    expect(fixLetter(letter)).toStrictEqual(output)
  })
})
