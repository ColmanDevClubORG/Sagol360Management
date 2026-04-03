import i18n from '../../i18n'

export const formatDuration = (minutes: number): string => {
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60)
    return i18n.t('duration.hours', { count: hours })
  }
  return i18n.t('duration.minutes', { count: minutes })
}
