import { theme } from '@/theme'
import type { CSSProperties } from '@mui/material'

export const cardStyle: CSSProperties = {
  backgroundColor: theme.palette.lightGreen.main,
  borderColor: theme.palette.emerald.main,
}

export const typographyStyle: CSSProperties = {
  color: theme.palette.darkGreen.main,
  whiteSpace: 'pre-line',
}

export const titleDivStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.5rem',
  marginInlineStart: '1rem',
}

export const bodyDivStyle: CSSProperties = {
  marginInlineStart: '2rem',
}

export const iconSize = 16
