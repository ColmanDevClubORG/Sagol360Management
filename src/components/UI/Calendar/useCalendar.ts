import { useTheme } from '@mui/material'
import dayjs from 'dayjs'
import 'dayjs/locale/he'
import 'dayjs/locale/en'
import 'dayjs/locale/ru'
import 'dayjs/locale/ar'
import { useTranslation } from 'react-i18next'

import { getCurrentDay, getStartOfWeek } from '../../../utils/datesUtils'
import type { SGLCalendarProps } from './SGLCalendar'

export const useCalendar = ({
  selectedDate,
  weekDate,
}: Pick<SGLCalendarProps, 'selectedDate' | 'weekDate'>) => {
  const theme = useTheme()
  const { i18n } = useTranslation()
  const locale = i18n.language.split('-')[0]

  const today = getCurrentDay()
  const baseDate = weekDate ?? selectedDate
  const currentWeekStart = getStartOfWeek(baseDate.toDate())

  const startOfWeek = dayjs(currentWeekStart).locale(locale)

  const weekDays = Array.from({ length: 7 }, (_, index) => startOfWeek.add(index, 'day'))
  return {
    theme,
    today,
    weekDays,
  }
}
