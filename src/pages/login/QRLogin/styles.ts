import type { CSSProperties } from '@mui/material'

export const scannerContainer: CSSProperties = {
  position: 'relative',
  minHeight: 250,
}

export const loadingOverlay: CSSProperties = {
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#666',
}
