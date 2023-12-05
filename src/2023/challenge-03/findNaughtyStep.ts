export function findNaughtyStep (original: string, modified: string): string {
  const [shortest, longest] =
    [original, modified].sort((a, b) => a.length - b.length)

  return [...longest].find((char, index) => shortest[index] !== char) ??
    ''
}
