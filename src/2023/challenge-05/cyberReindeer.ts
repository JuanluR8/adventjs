export function cyberReindeer (road: string, time: number): string[] {
  const result = [road]
  let lastChar = '.'

  for (let t = 1; t < time; t++) {
    if (t === 5) road = road.replaceAll('|', '*')

    const matches = road.match(/S[*.]/g)

    if (matches !== null) {
      const [firstMatch] = matches
      road = road.replace(firstMatch, lastChar + 'S')
      lastChar = firstMatch[1]
    }

    result.push(road)
  }

  return result
}
