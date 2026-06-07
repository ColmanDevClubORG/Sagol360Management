import type { CSSProperties } from '@mui/material'

export const scannerContainer: CSSProperties = {
  position: 'fixed',
  inset: 0,
  zIndex: 9999,
  backgroundColor: '#000',
}

export const loadingOverlay: CSSProperties = {
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  zIndex: 10001,
}

export const closeButton: CSSProperties = {
  position: 'absolute',
  top: 16,
  right: 16,
  zIndex: 10000,
  background: 'rgba(0,0,0,0.5)',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  width: 40,
  height: 40,
  fontSize: 24,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
