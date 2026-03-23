import Card, { type CardProps as MuiCardProps } from '@mui/material/Card'
import { type SxProps, type Theme } from '@mui/material'
import { getCardStyles, type CardVariant } from './styles'

interface CardProps extends Omit<MuiCardProps, 'style' | 'sx' | 'variant'> {
  variant?: CardVariant
  style?: SxProps<Theme>
}

export const SGLCard = ({ variant, style, ...props }: CardProps) => {
  return (
    <Card
      sx={(theme) => ({ ...getCardStyles(theme, variant), ...(style as object) })}
      {...props}
    ></Card>
  )
}
