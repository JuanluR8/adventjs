export function checkJump (heights: number[]): boolean {
  const maxHeight = Math.max(...heights)
  const maxIndex = heights.indexOf(maxHeight)

  const partialLeft = heights.slice(0, maxIndex)
  const partialRight = heights.slice(maxIndex + 1, heights.length)

  const conditions = [
    partialRight.length > 0,
    maxIndex > 0,
    partialRight.slice(1).every((h, index) => h <= partialRight[index]),
    partialLeft.slice(1).every((h, index) => h >= partialLeft[index])
  ]

  return conditions.every(condition => condition)
}
