import type { CSSProperties } from '@mui/material'
import { theme } from '@/theme'

export const loginPatientStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '100%',
}

export const qrButton: CSSProperties = {
  border: `0.14rem dashed ${theme.palette.lightPurple.main}`,
  width: '100%',
  borderRadius: '1rem',
  color: theme.palette.purple.main,
}

export const qrButtonContent: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  width: '100%',
  fontWeight: 'bold',
  fontSize: '1rem',
  padding: '0.5rem ',
}

export const infoBox: CSSProperties = {
  display: 'flex',
  gap: '0.4rem',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.lowOpacityPurple.main,
  borderRadius: '1rem',
  padding: '0.5rem',
}

export const qrCardContainer: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.5rem',
  padding: '2rem',
  backgroundColor: theme.palette.lightGrey.main,
  borderRadius: '1rem',
}
