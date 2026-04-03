import { alpha } from '@mui/material/styles'
import type { Theme } from '@mui/material/styles'
import type { CSSProperties } from 'react'

export const cardStyles = (theme: Theme) => ({
  width: '92%',
  margin: '1rem auto',
  background: theme.palette.common.white,
  borderRadius: '1rem',
  padding: '0.5rem',
  minHeight: 'auto',
  boxSizing: 'border-box' as const,
})

export const getTextColor = (theme: Theme, isSelected: boolean, isToday: boolean) => {
  if (isSelected) return theme.palette.common.white
  if (isToday) return theme.palette.purple.main
  return theme.palette.text.secondary
}

export type DayStylesProps = {
  isSelected: boolean
  isToday: boolean
  theme: Theme
}

export const getDayStyles = ({ isSelected, isToday, theme }: DayStylesProps) => {
  const color = theme.palette.purple.main

  return {
    cursor: 'pointer',
    borderRadius: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    width: '100%',
    maxWidth: '2.25rem',
    height: '2.875rem',
    margin: '0 auto',

    backgroundColor: isSelected ? color : isToday ? alpha(color, 0.1) : 'transparent',

    '&:hover': {
      backgroundColor: isSelected ? color : alpha(color, 0.05),
    },
  }
}

export const calendarGridStyles: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: '0.125rem',
  padding: '0.5rem 0.25rem',
  width: '100%',
  direction: 'rtl',
  boxSizing: 'border-box',
}
