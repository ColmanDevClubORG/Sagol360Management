import type { Theme } from '@mui/material/styles'

export const sliderStyles = (theme: Theme, isRtl: boolean) => ({
  '& .MuiSlider-thumb': {
    marginInline: '-1rem',
    backgroundColor: theme.palette.purple.main,
    border: `2.5px solid ${theme.palette.background.paper}`,
    boxShadow: theme.shadows[1],
  },
  '& .MuiSlider-track': {
    direction: isRtl ? 'rtl' : 'ltr',
    backgroundColor: 'transparent',
    border: 'none',
    height: '0.3rem',
  },
  '& .MuiSlider-rail': {
    direction: isRtl ? 'rtl' : 'ltr',
    color: theme.palette.mediumGrey.main,
    height: '0.3rem',
  },
})
