import Button, { type ButtonProps as MuiButtonProps } from '@mui/material/Button'
import { buttonStyles } from './styles'
import type { SxProps, Theme } from '@mui/material/styles'

const variantcolor = {
  white: 'background.paper',
  black: 'black',
  purple: 'purple.main',
  orange: 'orange.main',
} as const

interface ButtonProps extends Omit<MuiButtonProps, 'onClick' | 'style' | 'color'> {
  text: string
  onClick: () => void
  style?: SxProps<Theme>
  color?: 'white' | 'black' | 'purple' | 'orange'
  textColor?: 'white' | 'black' | 'purple' | 'orange'
}

export const SGLButton = ({
  text,
  onClick,
  style,
  variant = 'contained',
  color = 'purple',
  textColor = 'white',
  ...props
}: ButtonProps) => {
  return (
    <Button
      sx={{
        ...buttonStyles,
        ...(variant === 'contained' && {
          backgroundColor: variantcolor[color],
          color: variantcolor[textColor],
        }),
        ...(variant === 'outlined' && {
          borderColor: variantcolor[color],
          color: variantcolor[textColor],
        }),
        ...style,
      }}
      variant={variant}
      onClick={onClick}
      {...props}
    >
      {text}
    </Button>
  )
}
