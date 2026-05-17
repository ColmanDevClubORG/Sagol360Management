import { type Theme } from '@mui/material'
import { darken } from '@mui/material/styles'

export const CardVariant = {
  Purple: 'purple',
  Orange: 'orange',
  White: 'white',
  Outlined: 'outlined',
}

export type CardVariant = (typeof CardVariant)[keyof typeof CardVariant]

export const getCardStyles = (theme: Theme, variant: CardVariant = 'purple') => {
  if (variant === 'purple') {
    const color = theme.palette[variant].main
    return {
      borderRadius: '10px',
      background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%,${darken(color, 0.2)} 100%)`,
    }
  } else if (variant === 'orange') {
    const color = theme.palette[variant].main

    return {
      borderRadius: '10px',
      background: `linear-gradient(145deg, ${color} 20%,${theme.palette.darkOrange.main} 90%)`,
    }
  } else if (variant === 'white') {
    return {
      borderRadius: '10px',
      background: theme.palette.background.paper,
      boxShadow: 'none',
      border: `1px solid ${theme.palette.lightWhite.main}`,
    }
  }
  return {
    borderRadius: '10px',
    backgroundColor: theme.palette.lightGrey.main,
    border: `1px solid ${theme.palette.midGrey.main}`,
  }
}
