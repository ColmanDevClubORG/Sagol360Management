export const formatDuration = (minutes: number): string => {
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60)
    return `${hours} שעות`
  }
  return `${minutes} דק'`
}
