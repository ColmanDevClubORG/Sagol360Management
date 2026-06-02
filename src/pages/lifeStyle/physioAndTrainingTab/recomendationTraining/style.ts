import type { CSSProperties } from 'react'

export const rootStyleMobile = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1rem',
  paddingBottom: '1rem',
} as CSSProperties

export const rootStyleDesktop = {
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  padding: '1rem',
  paddingBottom: '1rem',
} as CSSProperties

export const conteinerDesktop = {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: '1rem',
  paddingTop: '1rem',
} as CSSProperties

export const headerDesktop = {
  paddingTop: '0.5em',
  paddingBottom: '0.5rem',
} as CSSProperties

export const videoContainerDesktop = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
} as CSSProperties
