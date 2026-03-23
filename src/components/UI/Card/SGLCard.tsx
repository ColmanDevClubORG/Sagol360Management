import Card, { type CardProps as MuiCardProps } from '@mui/material/Card'
import { getCardStyles, type CardColor } from './styles'

interface CardProps extends Omit<MuiCardProps, 'style' | 'sx'> {
  color?: CardColor
}

export const SGLCard = ({ color, ...props }: CardProps) => {
  return <Card sx={(theme) => getCardStyles(theme, color)} {...props}></Card>
}
