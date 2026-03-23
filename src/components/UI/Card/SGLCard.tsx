import Card, { type CardProps as MuiCardProps } from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import { cardStyles, getCardBackground, type CardColor } from './styles'

interface CardProps extends Omit<MuiCardProps, 'style' | 'sx'> {
  color?: CardColor
}

export const SGLCard = ({ color, ...props }: CardProps) => {
  const theme = useTheme()

  return <Card sx={{ ...cardStyles, ...getCardBackground(theme, color) }} {...props}></Card>
}
