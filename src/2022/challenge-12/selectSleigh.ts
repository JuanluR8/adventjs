export interface Sleigh {
  name: string
  consumption: number
}

export function selectSleigh (distance: number, sleighs: Sleigh[]): Sleigh['name'] | null {
  const MAX_W = 20

  const filteredSleight = sleighs.filter(sleigh => {
    const total = distance * sleigh.consumption

    return total <= MAX_W
  })

  if (filteredSleight.length === 0) return null

  const { name } = filteredSleight[filteredSleight.length - 1]

  return name
}
