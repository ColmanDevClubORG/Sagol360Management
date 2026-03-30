import { Typography } from '@mui/material'
import type { CSSProperties, ReactNode } from 'react'
import { variantMap, type TypographyVariant } from './types'

interface TypographyProps {
  variant?: TypographyVariant
  children: ReactNode
  styles?: CSSProperties
  color?: string
}

export const SGLTypography = ({
  variant = 'largeTitle',
  children,
  color,
  styles,
}: TypographyProps) => {
  return (
    <Typography color={color} variant={variantMap[variant]} sx={{ ...styles }}>
      {children}
    </Typography>
  )
}
