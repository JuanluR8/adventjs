export interface Box {
  l: number
  h: number
  w: number
}

export function fitsInOneBox (boxes: Box[]): boolean {
  return boxes
    .sort((a, b) => a.l - b.l)
    .every((nextBox, index, sortedBoxes) => {
      const previousBox = sortedBoxes[index - 1]

      if (previousBox === undefined) return true

      const fitLong = previousBox.l < nextBox.l
      const fitWidth = previousBox.w < nextBox.w
      const fitHeight = previousBox.h < nextBox.h

      return [fitLong, fitWidth, fitHeight].every(condition => condition)
    })
}
