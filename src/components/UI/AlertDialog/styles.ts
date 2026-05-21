import { type Theme } from '@mui/material'
import { darken } from '@mui/material/styles'

export const dialogStyles = {
  '& .MuiDialog-paper': {
    borderRadius: '1.75rem',
    overflow: 'hidden',
    width: '100%',
    maxWidth: '22rem',
    height: 'min(500px, 70vh)',
  },
}

export const topBoxStyles = (theme: Theme) => ({
  display: 'flex',
  background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%,${darken(theme.palette.purple.main, 0.2)} 100%)`,
  height: '40%',
  width: '100%',
})

export const bottomBoxStyles = {
  flex: 1,
  display: 'flex',
  backgroundColor: 'background.paper',
  width: '100%',
}
