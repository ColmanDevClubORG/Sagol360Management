import { type Theme } from '@mui/material'
import { lighten } from '@mui/material/styles'

export type CardVariant = 'purple' | 'orange'

export const getCardStyles = (theme: Theme, variant: CardVariant = 'purple') => {
  const color = theme.palette[variant].main

  return {
    borderRadius: '10px',
    background: `linear-gradient(135deg, ${lighten(color, 0.2)} 0%, ${color} 70%)`,
  }
}
