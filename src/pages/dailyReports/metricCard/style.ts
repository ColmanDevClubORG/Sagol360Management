import type { Theme } from '@mui/material/styles'
import type { PaletteColorKey } from './MetricCard'

export const rootStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '90%',
  margin: '0 auto',
} as React.CSSProperties

export const cardHeaderStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
} as React.CSSProperties

export const headerTitleStyle = {
  display: 'flex',
  flexDirection: 'row',
  gap: '7px',
} as React.CSSProperties

export const headerValueStyle = (theme: Theme) => ({
  color: theme.palette.purple.main,
})

export const labelContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
} as React.CSSProperties

export const labelTextStyle = (theme: Theme) => ({
  color: theme.palette.midGrey.main,
})

export const iconStyle = (theme: Theme, color: PaletteColorKey) => ({
  color: theme.palette[color].main,
})
