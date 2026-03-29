import type { Theme } from '@mui/material/styles'

export const buttonStyles = (theme: Theme) => {
  return {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.background.paper,
    },
    borderRadius: '5px',
  }
}
