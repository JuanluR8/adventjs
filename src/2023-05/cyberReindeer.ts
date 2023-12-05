export function cyberReindeer (road: string, time: number): string[] {
  const result = [road]

  for (let t = 1; t < time; t++) {
    const barriersOpened = t >= 5
    const sledIndex = Math.max(result[t - 1].indexOf('S'), 0)
    let nextRoad = result[result.length - 1].split('')

    if (barriersOpened) {
      nextRoad = nextRoad.join('').replaceAll('|', '*').split('')
    }

    if (road[sledIndex + 1] !== '|' || barriersOpened) {
      nextRoad[sledIndex] = road[sledIndex] === '|' ? '*' : '.'
      nextRoad[sledIndex + 1] = 'S'
    }

    result.push(nextRoad.join(''))
  }

  return result
}
