import { type Theme } from '@mui/material'
import { lighten } from '@mui/material/styles'

export const CardVariant = {
  Purple: 'purple',
  Orange: 'orange',
  White: 'white',
  Outlined: 'outlined',
}

export type CardVariant = (typeof CardVariant)[keyof typeof CardVariant]

export const getCardStyles = (theme: Theme, variant: CardVariant = 'purple') => {
  if (variant === 'purple' || variant === 'orange') {
    const color = theme.palette[variant].main

    return {
      borderRadius: '10px',
      background: `linear-gradient(135deg, ${lighten(color, 0.2)} 0%, ${color} 70%)`,
    }
  } else if (variant === 'white') {
    return {
      borderRadius: '10px',
      background: theme.palette.background.paper,
    }
  }
  return {
    borderRadius: '10px',
    backgroundColor: theme.palette.lightGrey.main,
    border: `1px solid ${theme.palette.midGrey.main}`,
  }
}
