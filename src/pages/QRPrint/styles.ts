import { theme } from '@/theme'
import type { CSSProperties } from '@mui/material'

export const containerStyle: CSSProperties = {
  width: '335px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  padding: '2rem',
}
export const textStyle: CSSProperties = {
  fontSize: '1.3em',
  fontWeight: 'bold',
  color: theme.palette.common.white,
}

export const submitButtonContent: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '-1rem',
  width: '100%',
  fontWeight: 'bold',
  fontSize: '1rem',
  padding: '0.5rem',
}
