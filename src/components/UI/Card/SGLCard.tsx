import Card, { type CardProps as MuiCardProps } from '@mui/material/Card'
import { getCardStyles, type CardVariant } from './styles'
import type { CSSProperties } from '@mui/material/styles'

interface CardProps extends Omit<MuiCardProps, 'style' | 'sx' | 'variant'> {
  variant?: CardVariant
  style?: CSSProperties
}

export const SGLCard = ({ variant, style, ...props }: CardProps) => {
  return <Card sx={(theme) => ({ ...getCardStyles(theme, variant), ...style })} {...props}></Card>
}
