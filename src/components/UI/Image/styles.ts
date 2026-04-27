import type { CSSProperties } from 'react'
import type { Theme } from '@mui/material'

export const imageStyles: CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}

export const placeholderStyles = (theme: Theme): CSSProperties => ({
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.midGrey.main,
})
