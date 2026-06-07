import { styled } from '@mui/material'
import type { CSSProperties } from 'react'

export const HomeTopMobile = {
  display: 'flex',
  flexDirection: 'column',
  width: '87%',
  margin: '0 auto',
  gap: '1rem',
  paddingTop: '1rem',
} as CSSProperties

export const HomeTopDesktop = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  width: '90%',
  margin: '0 auto',
  paddingTop: '2rem',
} as CSSProperties

export const HomeButtomMobile = {
  display: 'flex',
  flexDirection: 'column',
  width: '87%',
  margin: '0 auto',
  gap: '1rem',
  paddingTop: '1rem',
  paddingBottom: '2.5rem',
} as CSSProperties

export const HomeButtomDesktop = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: '1rem',
  width: '90%',
  margin: '0 auto',
  paddingTop: '1rem',
} as CSSProperties

export const NavContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'left',
  paddingTop: '0.9rem',
  paddingLeft: '0.9rem',
  marginBottom: theme.spacing(1),
}))
