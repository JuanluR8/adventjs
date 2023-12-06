type V = '>' | '<' | '*'
type K = 'right' | 'left' | 'jokers'
type Acc = Record<K, number>

export function maxDistance (movements: string): number {
  const map = new Map<V, K>([
    ['>', 'right'],
    ['<', 'left'],
    ['*', 'jokers']
  ])

  const { jokers, right, left } = [...movements].reduce<Acc>((acc, p) => {
    const field = map.get(p as V)

    acc[field as K]++

    return acc
  }, { jokers: 0, right: 0, left: 0 })

  return Math.abs(right - left) + jokers
}
