import type { CSSProperties } from '@mui/material'
import { theme } from '../../../theme'
import { alpha } from '@mui/material/styles'
import { CardVariant } from '@/components/UI/Card/styles'

export const cardStyle: CSSProperties = {
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

const wellDoneText: CSSProperties = {
  color: theme.palette.purple.main,
  backgroundColor: theme.palette.lowOpacityPurple.main,
  borderRadius: '0.8rem',
  paddingTop: '0.2rem',
  paddingBottom: '0.2rem',
  paddingLeft: '0.5rem',
  paddingRight: '0.5rem',
  marginTop: '1rem',
}

const circularProgress: CSSProperties = {
  color: theme.palette.purple.main,
}

const purpleText: CSSProperties = {
  color: theme.palette.purple.main,
  lineHeight: 1,
}

const progressLabelText: CSSProperties = {
  lineHeight: 1,
}

export const progressDiv: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  lineHeight: 0.5,
}

const desktopText: CSSProperties = {
  color: theme.palette.background.paper,
}

const desktopWellDoneText: CSSProperties = {
  ...wellDoneText,
  color: theme.palette.background.paper,
  backgroundColor: alpha(theme.palette.background.paper, 0.25),
}

const desktopCircularProgress: CSSProperties = {
  ...circularProgress,
  color: theme.palette.background.paper,
}

const whiteText: CSSProperties = {
  color: theme.palette.background.paper,
  lineHeight: 1,
}

export const variantStyles = {
  mobile: {
    card: CardVariant.White,
    text: undefined,
    wellDone: wellDoneText,
    progress: circularProgress,
    valueText: purpleText,
    labelText: progressLabelText,
  },
  desktop: {
    card: CardVariant.Purple,
    text: desktopText,
    wellDone: desktopWellDoneText,
    progress: desktopCircularProgress,
    valueText: whiteText,
    labelText: whiteText,
  },
}
