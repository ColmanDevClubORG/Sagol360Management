import type { Theme } from '@mui/material/styles'

export const sliderStyles = (theme: Theme) => ({
  '& .MuiSlider-thumb': {
    backgroundColor: theme.palette.purple.main,
    border: `2.5px solid ${theme.palette.background.paper}`,

    ///boxShadow: `0 1px 1px ${theme.palette.gray.main}`,
    boxShadow: theme.shadows[1],
  },
  '& .MuiSlider-track': {
    backgroundColor: 'transparent',
    border: 'none',
    height: '0.3rem',
  },
  '& .MuiSlider-rail': {
    color: theme.palette.mediumGrey.main,
    height: '0.3rem',
  },
})
