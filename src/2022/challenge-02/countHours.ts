export function countHours (year: number, holidays: string[]): number {
  return holidays.reduce((acc, day) => {
    const date = new Date(`${day}/${year}`)

    const weekDay = date.getDay()

    const isWeekend = weekDay === 0 || weekDay === 6

    if (!isWeekend) acc += 2

    return acc
  }, 0)
}
