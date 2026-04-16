import { theme } from '@/theme'
import type { Theme } from '@emotion/react'
import type { CSSProperties, SxProps } from '@mui/material'

export const pageLayout: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
}
export const formContainer: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginTop: '1rem',
  width: '100%',
}
export const roundedInputStyle: SxProps<Theme> = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '1rem',
    '& .MuiOutlinedInput-notchedOutline': {
      borderWidth: '0.15rem',
      borderColor: theme.palette.midGrey.main,
    },
  },
}
export const submitButtonContent: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  width: '100%',
  fontWeight: 'bold',
  fontSize: '1rem',
  padding: '0.5rem',
}

export const submitButton: CSSProperties = {
  borderRadius: '1rem',
  width: '100%',
  backgroundColor: theme.palette.purple.main,
  color: theme.palette.background.paper,
}
