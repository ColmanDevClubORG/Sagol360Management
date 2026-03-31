import type { Theme } from '@mui/material/styles'

export const sliderStyles = (theme: Theme) => ({
  '& .MuiSlider-thumb': {
    backgroundColor: theme.palette.purple.main,
    border: `2.5px solid ${theme.palette.background.paper}`,

    boxShadow: '0 2px 8px textColor.black',
  },
  '& .MuiSlider-track': {
    backgroundColor: 'transparent',
    border: 'none',
  },
  '& .MuiSlider-rail': {
    color: theme.palette.mediumGrey.main,
  },
})
