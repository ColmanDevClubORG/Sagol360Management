import { alpha, type Theme } from '@mui/material/styles'

export type CardColor = 'purple' | 'orange'

export const cardStyles = {
  borderRadius: '10px',
}

export const getCardBackground = (theme: Theme, color: CardColor = 'purple') => ({
  background: `linear-gradient(135deg, ${alpha(theme.palette[color].main, 0.5)} 0%, ${theme.palette[color].main} 60%)`,
})
