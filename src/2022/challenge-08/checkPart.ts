export function checkPart (part: string): boolean {
  const isPalindrome = (word: string): boolean =>
    word === [...word].reverse().join('')

  if (isPalindrome(part)) return true

  return [...part].some((_, index) => {
    const candidate = part.substring(0, index) + part.substring(index + 1)

    return isPalindrome(candidate)
  })
}
