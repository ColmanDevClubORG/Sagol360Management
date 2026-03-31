import { Box, useTheme } from '@mui/material'
import dayjs from 'dayjs'
import 'dayjs/locale/he'
import { useState } from 'react'
import { getDayStyles, calendarGridStyles, dayNumberTextStyles, weekDayTextStyles } from './styles'
import { SGLTypography } from '../Typography/SGLTypography'
import { getStartOfWeek } from '../../../utils/datesUtils'
import { SGLCard } from '../Card/SGLCard'

dayjs.locale('he')

export const SGLCalendar = () => {
  const theme = useTheme()
  const today = dayjs()

  const currentWeekStart = getStartOfWeek(today.toDate())

  const weekDays = Array.from({ length: 7 }, (_, index) =>
    dayjs(currentWeekStart).add(index, 'day'),
  )

  const [selectedDate, setSelectedDate] = useState(today)

  const getTextColor = (isSelected: boolean, isToday: boolean) => {
    if (isSelected) return theme.palette.lightGrey.main
    if (isToday) return theme.palette.purple.main
  }

  return (
    <SGLCard variant="lightGrey">
      <Box sx={calendarGridStyles}>
        {weekDays.map((day) => {
          const isSelected = day.isSame(selectedDate, 'day')
          const isToday = day.isSame(today, 'day')

          return (
            <Box
              key={day.format('YYYY-MM-DD')}
              onClick={() => setSelectedDate(day)}
              sx={getDayStyles({
                isSelected,
                isToday,
                theme,
                variant: 'purple',
              })}
            >
              <SGLTypography
                variant="smallText"
                color={getTextColor(isSelected, isToday)}
                styles={weekDayTextStyles}
              >
                {day.format('dd')}
              </SGLTypography>

              <SGLTypography
                variant="mediumText"
                color={getTextColor(isSelected, isToday)}
                styles={dayNumberTextStyles}
              >
                {day.format('D')}
              </SGLTypography>
            </Box>
          )
        })}
      </Box>
    </SGLCard>
  )
}
