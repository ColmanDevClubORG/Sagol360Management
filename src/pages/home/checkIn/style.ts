import type { Theme } from '@mui/material/styles'

export const CheckInStyles = (theme1: Theme) => {
  return {
    root: (theme: Theme) => ({
      width: '85%',
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      color: theme1.palette.lightGrey.main,
      backgroundColor: theme.palette.purple.main,
    }),
    containedButton: (theme: Theme) => ({
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.purple.main,
    }),
    outlinedButton: (theme: Theme) => ({
      borderColor: theme.palette.background.paper,
      color: theme.palette.background.paper,
    }),
  }
}
