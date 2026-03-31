import type { DayStylesProps } from './types'
import { alpha } from '@mui/material/styles'

export const getDayStyles = ({
  isSelected,
  isToday,
  theme,
  variant = 'purple',
}: DayStylesProps) => {
  const color = theme.palette[variant].main

  return {
    cursor: 'pointer',
    borderRadius: '0.5rem',
    padding: '0.75rem',
    transition: '0.2s',

    backgroundColor: isSelected ? color : isToday ? alpha(color, 0.2) : 'transparent',
  }
}
export const calendarGridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
  gap: { xs: '0.25rem', sm: '0.5rem' },
  textAlign: 'center',
  width: '100%',
}

export const weekDayTextStyles = {
  fontSize: '0.8rem',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}
export const dayNumberTextStyles = {
  fontWeight: 700,
  fontSize: '0.8rem',
  lineHeight: 1.1,
}
