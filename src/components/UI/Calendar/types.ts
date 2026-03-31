import type { Theme } from '@mui/material/styles'
import type { CardVariant } from '../Card/styles'

export type DayStylesProps = {
  isSelected: boolean
  isToday: boolean
  theme: Theme
  variant?: CardVariant
}
