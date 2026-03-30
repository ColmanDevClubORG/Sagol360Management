import type { Theme } from '@mui/material/styles'

export const buttonStyles = (theme: Theme) => {
  return {
    borderRadius: '10px',
    fontWeight: 700,
    fontSize: '10px',
    padding: '0.5rem 2rem',
    '&.MuiButton-contained': {
      backgroundColor: theme.palette.purple.main,
      color: theme.palette.lightGrey.main,
    },
    '&.MuiButton-outlined': {
      border: '1.5px solid',
      borderColor: theme.palette.mediumGrey.main,
      color: theme.palette.text.primary,
    },
  }
}
