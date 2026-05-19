import { theme } from '@/theme'
import type { CSSProperties } from '@mui/material'

export const containerStyle: CSSProperties = {
  backgroundColor: theme.palette.background.paper,
  width: '70%',
  maxWidth: '20rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxShadow: theme.shadows[4],
  borderRadius: '1rem',
  padding: '1rem',
}
