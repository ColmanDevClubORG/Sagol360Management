import Button, { type ButtonProps as MuiButtonProps } from '@mui/material/Button'
import { buttonStyles } from './styles'
import type { SxProps, Theme } from '@mui/material/styles'
import type { ReactNode } from 'react'

interface ButtonProps extends Omit<MuiButtonProps, 'onClick' | 'style' | 'color'> {
  children: ReactNode
  onClick: () => void
  style?: SxProps<Theme>
  variant?: 'contained' | 'outlined'
  color?: 'primary' | 'secondary' | 'error' | 'purple' | 'orange'
  textColor?: 'primary' | 'secondary' | 'error' | 'purple' | 'orange' | 'lightGrey'
}

export const SGLButton = ({
  children,
  // text,
  onClick,
  style,
  variant = 'contained',
  color = 'purple',
  textColor = 'lightGrey',
  ...props
}: ButtonProps) => {
  return (
    <Button
      sx={(theme) => ({
        ...buttonStyles(theme, variant, color, textColor),
        ...(style || {}),
      })}
      variant={variant}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  )
}
