export function createCube (size: number): string {
  const top = Array.from({ length: size }, (_, i) => i + 1)
    .map(i => {
      const leftSide = ' '.repeat(size - i)
      const centerSide = '/\\'.repeat(i)
      const rightSide = '_\\'.repeat(size)

      return leftSide + centerSide + rightSide
    })

  const bottom = Array.from({ length: size }, (_, i) => size - i)
    .map(i => {
      const leftSide = ' '.repeat(size - i)
      const centerSide = '\\/'.repeat(i)
      const rightSide = '_/'.repeat(size)

      return leftSide + centerSide + rightSide
    })

  return [...top, ...bottom].join('\n')
}
