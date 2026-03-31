import type { CSSProperties } from '@mui/material'
import { theme } from '../../theme'

export const mobileCardStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '1rem',
  alignItems: 'center',
}

export const textDiv: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
}

export const wellDoneText: CSSProperties = {
  color: theme.palette.purple.main,
  backgroundColor: theme.palette.lowOpacityPurple.main,
  borderRadius: '0.8rem',
  paddingTop: '0.2rem',
  paddingBottom: '0.2rem',
  paddingLeft: '0.5rem',
  paddingRight: '0.5rem',
  marginTop: '1rem',
}

export const circularProgress: CSSProperties = {
  color: theme.palette.purple.main,
}

export const purpleText: CSSProperties = {
  color: theme.palette.purple.main,
}

export const progressDiv: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
}
