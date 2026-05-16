import { styled } from '@mui/material'
import type { CSSProperties } from 'react'

export const HomeWrapper = {
  display: 'flex',
  flexDirection: 'column',
  width: '87%',
  margin: '0 auto',
  gap: '1.5rem',
  paddingTop: '1rem',
  paddingBottom: '1.5rem',
} as CSSProperties

export const NavContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'left',
  paddingTop: '0.9rem',
  paddingLeft: '0.9rem',
  marginBottom: theme.spacing(1),
}))
