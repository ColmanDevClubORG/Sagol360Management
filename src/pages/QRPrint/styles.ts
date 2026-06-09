import { theme } from '@/theme'
import type { CSSProperties } from '@mui/material'

export const pageContainer: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  width: '100%',
}

export const cardContainer: CSSProperties = {
  width: '400px',
}

export const containerStyle: CSSProperties = {
  width: '335px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  padding: '2rem',
}

export const textStyle: CSSProperties = {
  fontSize: '1.3rem',
  fontWeight: 'bold',
  color: theme.palette.common.white,
}

export const submitButtonContent: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  fontWeight: 'bold',
  fontSize: '1rem',
  padding: '0.5rem',
}
