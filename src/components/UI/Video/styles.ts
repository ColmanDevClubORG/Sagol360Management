import type { CSSProperties } from '@mui/material/styles'
import type { Theme } from '@mui/material'

export const card: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '1rem',
  cursor: 'pointer',
  width: '100%',
  boxSizing: 'border-box',
  justifyContent: 'space-between',
}

export const thumbnailWrapper: CSSProperties = {
  position: 'relative',
  width: '8rem',
  height: '5rem',
  borderRadius: '0.5rem',
  overflow: 'hidden',
}

export const thumbnail: CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}

export const thumbnailPlaceholder = (theme: Theme): CSSProperties => ({
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.midGrey.main,
})

export const playOverlay: CSSProperties = {
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export const playButton = (theme: Theme): CSSProperties => ({
  width: '2rem',
  height: '2rem',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.paper,
})

export const playIcon = (theme: Theme): CSSProperties => ({
  fontSize: 20,
  color: theme.palette.secondary.main,
})

export const content: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
}

export const durationChip = (theme: Theme): CSSProperties => ({
  padding: '0.2rem 0.5rem',
  borderRadius: '0.2rem',
  width: '3rem',
  border: `1px solid ${theme.palette.mediumGrey.main}`,
})
