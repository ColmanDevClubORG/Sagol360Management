import { alpha, type Theme } from '@mui/material/styles'

export type CardColor = 'purple' | 'orange'

export const getCardStyles = (theme: Theme, variant: CardColor = 'purple') => {
  const color = theme.palette[variant].main

  return {
    borderRadius: '10px',
    background: `linear-gradient(135deg, ${alpha(color, 0.5)} 0%, ${color} 60%)`,
  }
}
