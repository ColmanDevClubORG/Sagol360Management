import type { Theme } from '@mui/material/styles'
import type { CSSProperties } from 'react'

export const headerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  Padding: '0.5rem',
}

export const reportButtonStyle = (theme: Theme) => ({
  color: theme.palette.background.paper,
  backgroundColor: theme.palette.purple.main,
  width: '90%',
  margin: '0 auto',
  gap: '0.5rem',
  borderRadius: '0.7rem',
})

export const succssesReportButtonStyle = (theme: Theme) => ({
  color: theme.palette.background.paper,
  backgroundColor: theme.palette.emerald.main,
  width: '90%',
  margin: '0 auto',
  gap: '0.5rem',
  borderRadius: '0.7rem',
})

export const doneIconStyle = {
  fontSize: 'medium',
} as CSSProperties

export const sendIconStyle = {
  fontSize: 'medium',
  transform: 'rotate(135deg)',
} as CSSProperties
