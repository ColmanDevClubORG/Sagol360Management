import { Box, Paper, useTheme } from '@mui/material'
import dayjs, { Dayjs } from 'dayjs'
import 'dayjs/locale/he'
import { useMemo, useState } from 'react'
import { getDayStyles, paperStyles } from './styles'
import { SGLTypography } from '../Typography/SGLTypography'

dayjs.locale('he')

const getStartOfWeek = (date: Dayjs) => {
  const day = date.day()
  return date.subtract(day, 'day')
}

export default function WeekCalendar() {
  const theme = useTheme()
  const today = dayjs()
  const [selectedDate, setSelectedDate] = useState(today)
  const currentWeekStart = getStartOfWeek(today)

  const weekDays = useMemo(
    () => Array.from({ length: 7 }, (_, index) => currentWeekStart.add(index, 'day')),
    [currentWeekStart],
  )
  const getTextColor = (isSelected: boolean, isToday: boolean) => {
    if (isSelected) return theme.palette.lightGrey.main
    if (isToday) return theme.palette.purple.main
  }

  return (
    <Paper elevation={2} sx={paperStyles}>
      <Box display="grid" gridTemplateColumns="repeat(7, 1fr)" gap={1} textAlign="center">
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
              })}
            >
              <SGLTypography variant="smallText" color={getTextColor(isSelected, isToday)}>
                {day.format('dd')}
              </SGLTypography>

              <SGLTypography
                variant="mediumText"
                color={getTextColor(isSelected, isToday)}
                styles={{ fontWeight: 700 }}
              >
                {day.format('D')}
              </SGLTypography>
            </Box>
          )
        })}
      </Box>
    </Paper>
  )
}
