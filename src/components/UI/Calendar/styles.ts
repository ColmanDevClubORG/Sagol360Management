import type { Theme } from '@mui/material/styles'

type DayStylesProps = {
  isSelected: boolean
  isToday: boolean
  theme: Theme
}

export const paperStyles = {
  p: 2,
  borderRadius: 4,
  maxWidth: 520,
  backgroundColor: 'white',
}
export const getDayStyles = ({ isSelected, isToday, theme }: DayStylesProps) => ({
  cursor: 'pointer',
  borderRadius: 3,
  p: 1.2,
  transition: '0.2s',
  backgroundColor: isSelected
    ? theme.palette.purple.main
    : isToday
      ? theme.palette.lightGrey.main
      : 'transparent',
})
