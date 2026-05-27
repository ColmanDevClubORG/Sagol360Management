import { Box } from '@mui/material'
import 'dayjs/locale/he'
import { SGLTypography } from '../Typography/SGLTypography'
import { SGLCard } from '../Card/SGLCard'
import { calendarGridStyles, cardStyles, getDayStyles, getTextColor } from './styles'
import { useCalendar } from './useCalendar'
import type { Dayjs } from 'dayjs'
import { useIsMobile } from '@/hooks/useIsMobile'

export type SGLCalendarProps = {
  selectedDate: Dayjs
  onDateChange: (date: Dayjs) => void
  weekDate?: Dayjs
}

export const SGLCalendar = ({ selectedDate, onDateChange, weekDate }: SGLCalendarProps) => {
  const { theme, today, weekDays } = useCalendar({
    selectedDate,
    weekDate,
  })

  const isMobile = useIsMobile()

  return (
    <SGLCard variant="white" style={cardStyles(theme, isMobile)}>
      <div style={calendarGridStyles}>
        {weekDays.map((day) => {
          const isSelected = day.isSame(selectedDate, 'day')
          const isToday = day.isSame(today, 'day')
          const textColor = getTextColor(theme, isSelected, isToday)

          return (
            <Box
              key={day.format('YYYY-MM-DD')}
              onClick={() => onDateChange(day)}
              sx={getDayStyles({
                isSelected,
                isToday,
                theme,
              })}
            >
              <SGLTypography variant="smallText" color={textColor}>
                {day.format('dd')}
              </SGLTypography>

              <SGLTypography variant="mediumText" color={textColor}>
                {day.format('D')}
              </SGLTypography>
            </Box>
          )
        })}
      </div>
    </SGLCard>
  )
}
