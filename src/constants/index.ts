import { formatIsoDate } from '@/utils/datesUtils'

export const DOT = '•'
export const METRIC_MAX_VALUE = '10'
export const SLIDER_MIN_VALUE = 1
export const SLIDER_MAX_VALUE = 10
export const BALANCE_VIDEO_TIME = 15
export const STRETCH_VIDEO_TIME = 10
export const LUNGUAGES = {
  Hebrew: 'he',
  English: 'en',
  Arabic: 'ar',
  Russian: 'ru',
}
export const RTL_LUNGUAGES = [LUNGUAGES.Hebrew, LUNGUAGES.Arabic]
export const MOCK_DATA = {
  patientID: Number('1622017'),
  date: formatIsoDate(new Date(2026, 5, 23)),
}
