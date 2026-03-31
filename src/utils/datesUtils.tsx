export const getStartOfWeek = (date: Date): Date => {
  const d = new Date(date)
  const day = d.getDay()

  const diff = d.getDate() - day

  d.setDate(diff)
  d.setHours(0, 0, 0, 0)

  return d
}
