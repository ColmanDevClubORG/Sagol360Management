import type { CSSProperties } from '@mui/material'
import { theme } from '../../../theme'
import { alpha } from '@mui/material/styles'

export const mobileCardStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '1rem',
  alignItems: 'center',
}

export const protocol60TextDiv: CSSProperties = {
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
  lineHeight: 1,
}

export const progressLabelText: CSSProperties = {
  lineHeight: 1,
}

export const progressDiv: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  lineHeight: 0.5,
}

export const desktopText: CSSProperties = {
  color: theme.palette.background.paper,
}

export const desktopWellDoneText: CSSProperties = {
  ...wellDoneText,
  color: theme.palette.background.paper,
  backgroundColor: alpha(theme.palette.background.paper, 0.25),
}

export const desktopCircularProgress: CSSProperties = {
  ...circularProgress,
  color: theme.palette.background.paper,
}

export const whiteText: CSSProperties = {
  color: theme.palette.background.paper,
  lineHeight: 1,
}
