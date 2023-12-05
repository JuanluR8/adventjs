export function decode (message: string): string {
  const regex = /\(([^()]+)\)/g
  const replacer = (_: string, group: string): string => [...group].reverse().join('')

  return message
    .replace(regex, replacer)
    .replace(regex, replacer)
}
