export function getCompleted (part: string, total: string): string {
  const toSeconds = (hhmmss: string): number => hhmmss
    .split(':')
    .reduce((acc, value) => {
      return acc * 60 + Number(value)
    }, 0)

  const partInSeconds = toSeconds(part)
  const totalInSeconds = toSeconds(total)

  let gcd = totalInSeconds
  let gcdAux = partInSeconds

  while (gcdAux !== 0) {
    const tmp = gcd % gcdAux
    gcd = gcdAux
    gcdAux = tmp
  }

  return `${partInSeconds / gcd}/${totalInSeconds / gcd}`
}
