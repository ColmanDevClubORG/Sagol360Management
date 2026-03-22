import Button, { type ButtonProps as MuiButtonProps } from '@mui/material/Button'
import { buttonStyles } from './styles'
import type { SxProps, Theme } from '@mui/material/styles'

interface ButtonProps extends Omit<MuiButtonProps, 'onClick' | 'style'> {
  text: string
  onClick: () => void
  style?: SxProps<Theme>
}

export const SGLButton = ({
  text,
  onClick,
  style,
  variant = 'contained',
  ...props
}: ButtonProps) => {
  return (
    <Button sx={{ ...buttonStyles, ...style }} variant={variant} onClick={onClick} {...props}>
      {text}
    </Button>
  )
}
