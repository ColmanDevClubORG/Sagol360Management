import { useEffect } from 'react'
import { useTheme } from '@mui/material'
import dayjs from 'dayjs'
import 'dayjs/locale/he'
import 'dayjs/locale/en'
import 'dayjs/locale/ru'
import 'dayjs/locale/ar'
import { useTranslation } from 'react-i18next'

import { getCurrentDay, getStartOfWeek } from '../utils/datesUtils'
import type { SGLCalendarProps } from '../components/UI/Calendar/types'

export const useSGLCalendar = ({
  selectedDate,
  weekDate,
}: Pick<SGLCalendarProps, 'selectedDate' | 'weekDate'>) => {
  const theme = useTheme()
  const today = getCurrentDay()
  const { i18n } = useTranslation()

  dayjs.locale(i18n.language)

  useEffect(() => {
    dayjs.locale(i18n.language)
  }, [i18n.language])

  const baseDate = weekDate ?? selectedDate
  const currentWeekStart = getStartOfWeek(baseDate.toDate())

  const weekDays = Array.from({ length: 7 }, (_, index) =>
    dayjs(currentWeekStart).add(index, 'day'),
  )

  return {
    theme,
    today,
    weekDays,
  }
}
