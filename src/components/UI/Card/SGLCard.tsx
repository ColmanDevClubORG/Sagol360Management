import Card, { type CardProps as MuiCardProps } from '@mui/material/Card'
import { getCardBackground, cardStyles } from './styles'

const CARD_COLORS = {
  purple: '#6D22AB',
  orange: '#F57C00',
} as const

type CardColor = keyof typeof CARD_COLORS

interface CardProps extends Omit<MuiCardProps, 'style'> {
  style?: MuiCardProps['sx']
  color?: CardColor
}

export const SGLCard = ({ style, color = 'purple', ...props }: CardProps) => {
  return (
    <Card
      sx={{ ...cardStyles, ...getCardBackground(CARD_COLORS[color]), ...(style as object) }}
      {...props}
    ></Card>
  )
}
