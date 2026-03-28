import type { SxProps, Theme } from '@mui/material/styles'

export const buttonStyles = (
  theme: Theme,
  variant?: 'contained' | 'outlined',
  color: 'primary' | 'secondary' | 'error' | 'purple' | 'orange' = 'secondary',
  textColor: 'primary' | 'secondary' | 'error' | 'purple' | 'orange' | 'lightGrey' = 'primary',
): SxProps<Theme> => {
  if (variant === 'contained') {
    return {
      backgroundColor: theme.palette[color].main,
      color: theme.palette[textColor].main,
      borderRadius: '30px',
    }
  } else if (variant === 'outlined') {
    return {
      borderColor: theme.palette[color].main,
      color: theme.palette[textColor].main,
      borderRadius: '30px',
    }
  }
  return {}
}
