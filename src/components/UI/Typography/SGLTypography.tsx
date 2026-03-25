import { Typography } from '@mui/material'
import type { ReactNode } from 'react'

const variantMap = {
  largeTitle: 'h1',
  mediumTitle: 'h2',
  smallTitle: 'h3',
  largeText: 'h4',
  mediumText: 'h5',
  smallText: 'h6',
} as const

interface TypographyProps {
  variant?: 'largeTitle' | 'mediumTitle' | 'smallTitle' | 'smallText' | 'mediumText' | 'largeText'
  children: ReactNode
  color?: string
}

export const SGLTypography = ({ variant = 'largeTitle', children, color }: TypographyProps) => {
  return (
    <Typography color={color} variant={variantMap[variant]}>
      {children}
    </Typography>
  )
}
