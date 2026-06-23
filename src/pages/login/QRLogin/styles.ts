import type { CSSProperties } from '@mui/material'
import { theme } from '@/theme'

export const scannerContainer: CSSProperties = {
  position: 'fixed',
  inset: 0,
  zIndex: 2,
  backgroundColor: theme.palette.common.black,
}

export const scannerReader: CSSProperties = {
  width: '100%',
  height: '100%',
}

export const loadingOverlay: CSSProperties = {
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
  zIndex: 2,
}

export const closeIcon: CSSProperties = {
  position: 'absolute',
  top: 16,
  right: 16,
  zIndex: 2,
  color: theme.palette.common.white,
}
