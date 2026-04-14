import { theme } from '@/theme'
import type { CSSProperties } from '@mui/material'

export const containerStyle: CSSProperties = {
  backgroundColor: theme.palette.background.paper,
  width: '70%',
  maxWidth: '20rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: theme.shadows[4],
  borderRadius: '1rem',
  minHeight: '20rem',
  padding: '1rem',
}

export const toggleGroupStyle: CSSProperties = {
  backgroundColor: theme.palette.lightGrey.main,
  borderRadius: '2rem',
  padding: '0.3rem',
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
}

export const toggleGroupInnerStyle: CSSProperties = {
  width: '100%',
}

export const toggleButtonActive: CSSProperties = {
  flex: 1,
  backgroundColor: theme.palette.background.paper,
  border: 'none',
  borderRadius: '2rem',
  padding: '0.5rem',
  cursor: 'pointer',
  boxShadow: theme.shadows[1],
}

export const toggleButtonInactive: CSSProperties = {
  flex: 1,
  border: 'none',
  borderRadius: '2rem',
  padding: '0.5rem',
  cursor: 'pointer',
}

export const toggleTextActive: CSSProperties = {
  color: theme.palette.purple.main,
  fontWeight: 700,
}

export const toggleTextInactive: CSSProperties = {
  color: theme.palette.midGrey.main,
  fontWeight: 600,
}
