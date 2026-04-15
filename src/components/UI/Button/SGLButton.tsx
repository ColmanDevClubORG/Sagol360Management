import Button, { type ButtonProps as MuiButtonProps } from '@mui/material/Button'
import { buttonStyles } from './styles'
import type { CSSProperties, ReactNode } from 'react'

interface ButtonProps extends Omit<MuiButtonProps, 'onClick' | 'style' | 'color'> {
  children: ReactNode
  onClick: () => void
  variant?: 'contained' | 'outlined'
  styles?: CSSProperties
}

export const SGLButton = ({
  children,
  onClick,
  variant = 'contained',
  styles,
  ...props
}: ButtonProps) => {
  return (
    <Button sx={{ ...buttonStyles, ...styles }} variant={variant} onClick={onClick} {...props}>
      {children}
    </Button>
  )
}
