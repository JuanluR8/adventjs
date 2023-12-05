export function getGiftsToRefill (a1: string[], a2: string[], a3: string[]): string[] {
  const uniqItems = Array.from(new Set([...a1, ...a2, ...a3]))

  return uniqItems.filter(item => {
    const storesNumber = [a1, a2, a3].reduce((acc, store) => acc + Number(store.includes(item)), 0)

    return storesNumber === 1
  })
}
