import { theme } from '@/theme'
import type { CSSProperties } from '@mui/material'

export const cardStyle: CSSProperties = {
  backgroundColor: theme.palette.lightOrange.main,
  borderColor: `${theme.palette.orange.main}50`,
}

export const titleRowStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.5rem',
  marginRight: '1rem',
  marginTop: '1rem',
}

export const iconStyle: CSSProperties = {
  height: 20,
}

export const typographyStyle: CSSProperties = {
  color: theme.palette.warmBrown.main,
}

export const bodyContainerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  marginRight: '1rem',
  marginTop: '0.5rem',
  gap: '1rem',
  marginBottom: '1rem',
}

export const buttonTypographyStyle: CSSProperties = {
  color: theme.palette.background.paper,
}

export const buttonStyle: CSSProperties = {
  width: '13rem',
  height: '2.5rem',
  backgroundColor: theme.palette.orange.main,
}
