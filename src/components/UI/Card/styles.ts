import { alpha } from '@mui/material/styles'

export const cardStyles = {
  borderRadius: '10px',
}

export const getCardBackground = (color: string) => ({
  background: `linear-gradient(135deg, ${alpha(color, 0.5)} 0%, ${color} 70%)`,
})
