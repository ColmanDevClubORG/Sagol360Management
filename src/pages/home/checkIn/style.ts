import type { Theme } from '@mui/material/styles'
///import { color, type SxProps } from '@mui/system'
export const CheckInStyles = (theme: Theme) => {
  return {
    root: /*SxProps<Theme>*/ {
      width: '85%',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      backgroundColor: 'purple.main',
      borderRadius: '16px',
    },
    containedButton: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.purple.main,
    },
    outlinedButton: {
      borderColor: theme.palette.background.paper,
      color: theme.palette.background.paper,
    },
  }
}
