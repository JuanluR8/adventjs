export function decorateTree (base: string): string[] {
  const mapping = new Map([
    ['PP', 'P'],
    ['BP', 'R'],
    ['PR', 'B'],
    ['BR', 'P']
  ])

  const tree = [base]
  let level = base.split(' ')

  while (level.length > 1) {
    const newLevel: string[] = []

    for (let i = 0; i <= level.length - 2; i++) {
      const pair = [level[i], level[i + 1]].sort()

      const key = pair.join('')
      const newDecoration = mapping.has(key)
        ? mapping.get(key) as string
        : pair[0]

      newLevel.push(newDecoration)
    }

    tree.unshift(newLevel.join(' '))
    level = newLevel
  }

  return tree
}
