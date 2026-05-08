import type { Theme } from '@mui/material/styles'
import type { CSSProperties } from 'react'

export const headerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.3rem',
  paddingRight: '5%',
} as CSSProperties

export const reportButtonStyle = (theme: Theme) => ({
  color: theme.palette.background.paper,
  backgroundColor: theme.palette.purple.main,
  display: 'flex',
  width: '90%',
  margin: '0 auto',
  gap: '0.5rem',
  borderRadius: '0.6rem',
})

export const succssesReportButtonStyle = (theme: Theme) => ({
  color: theme.palette.background.paper,
  backgroundColor: theme.palette.emerald.main,
  display: 'flex',
  width: '90%',
  margin: '0 auto',
  gap: '0.5rem',
  borderRadius: '0.6rem',
})

export const doneIconStyle = {
  fontSize: 'medium',
} as CSSProperties

export const sendIconStyle = {
  fontSize: 'medium',
  transform: 'rotate(135deg)',
} as CSSProperties

export const reportListCardStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
} as CSSProperties

export const rootStyle = (theme: Theme) =>
  ({
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    gap: '2rem',
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem',
    width: '90%',
    borderRadius: '1rem',
    boxShadow: theme.shadows[1],
  }) as CSSProperties
