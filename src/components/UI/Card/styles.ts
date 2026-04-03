import { type Theme } from '@mui/material'
import { lighten } from '@mui/material/styles'

export const CardVariant = {
  Purple: 'purple',
  Orange: 'orange',
  White: 'white',
}

export type CardVariant = (typeof CardVariant)[keyof typeof CardVariant]

export const getCardStyles = (theme: Theme, variant: CardVariant = 'purple') => {
  if (variant === 'purple' || variant === 'orange') {
    const color = theme.palette[variant].main

    return {
      borderRadius: '10px',
      background: `linear-gradient(135deg, ${lighten(color, 0.2)} 0%, ${color} 70%)`,
    }
  }
  return {
    borderRadius: '10px',
    background: theme.palette.background.paper,
  }
}
