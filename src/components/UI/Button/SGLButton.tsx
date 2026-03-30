import Button, { type ButtonProps as MuiButtonProps } from '@mui/material/Button'
import { buttonStyles } from './styles'
import type { ReactNode } from 'react'

interface ButtonProps extends Omit<MuiButtonProps, 'onClick' | 'style' | 'color'> {
  children: ReactNode
  onClick: () => void
  variant?: 'contained' | 'outlined'
}

export const SGLButton = ({ children, onClick, variant = 'contained', ...props }: ButtonProps) => {
  return (
    <Button sx={buttonStyles} variant={variant} onClick={onClick} {...props}>
      {children}
    </Button>
  )
}
