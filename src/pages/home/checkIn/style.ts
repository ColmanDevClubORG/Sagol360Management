import type { Theme } from '@mui/material/styles'
import type { CSSProperties } from 'react'

export const root = (theme: Theme) => {
  return {
    width: '95%',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    backgroundColor: theme.palette.purple.main,
    borderRadius: '1rem',
    padding: '1.5rem',
  } as const
}

export const icon = (theme: Theme) => {
  return {
    color: theme.palette.background.paper,
  } as CSSProperties
}

export const containedButtonStyles = (theme: Theme) => {
  return {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.purple.main,
    flex: 1,
    borderRadius: '0.8rem',
  } as CSSProperties
}
export const outlinedButtonStyles = (theme: Theme) => {
  return {
    borderColor: theme.palette.background.paper,
    color: theme.palette.background.paper,
    borderRadius: '0.8rem',
  } as CSSProperties
}

export const completedButton = (theme: Theme) => {
  return {
    gap: '0.5rem',
    backgroundColor: theme.palette.success.main,
    color: theme.palette.background.paper,
    width: '100%',
    borderRadius: '0.8rem',
    '&:hover': {
      backgroundColor: theme.palette.text.primary,
    },
  } as CSSProperties
}

export const detailContainer = {
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
} as CSSProperties

export const iconContainer = {
  display: 'flex',
  flexDirection: 'row',
  gap: '0.3rem',
  alignItems: 'center',
} as CSSProperties

export const buttonsContainer = {
  display: 'flex',
  gap: '2rem',
  marginTop: '1rem',
  width: '100%',
  alignItems: 'center',
} as CSSProperties
