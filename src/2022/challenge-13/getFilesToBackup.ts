export type Change = [number, number]

export function getFilesToBackup (lastBackup: number, changes: Change[]): Array<Change[0]> {
  const filesToBackup = changes.filter(file => {
    const [, ts] = file

    return ts > lastBackup
  })

  const ids = filesToBackup.map(file => file[0])

  return [...new Set(ids)].sort((a, b) => a - b)
}
