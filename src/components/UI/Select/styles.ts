import type { Theme } from '@mui/material/styles'
import { alpha } from '@mui/material/styles'

export const selectStyles = (theme: Theme) => ({
  backgroundColor: theme.palette.lightGrey.main,
  '&:hover': {
    backgroundColor: alpha(theme.palette.lightGrey.main, 0.8),
  },
  borderRadius: '5px',
  '& .MuiSelect-select': {
    textAlign: 'right',
    paddingLeft: '24px',
  },
  '& .MuiSelect-icon': {
    left: 0,
    right: 'unset',
  },
})
