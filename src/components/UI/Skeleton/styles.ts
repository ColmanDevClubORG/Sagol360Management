import type { Theme } from '@mui/material/styles'

export const skeletonStyles = (theme: Theme) => {
  return {
    backgroundColor: theme.palette.lightGrey.main,
    opacity: 1,

    '&.MuiSkeleton-wave::after': {
      animationDuration: '1.6s',
    },
  }
}
