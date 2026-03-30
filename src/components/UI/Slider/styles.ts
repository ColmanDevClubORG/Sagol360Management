//import { Slider } from '@mui/material'
import type { Theme } from '@mui/material/styles'

export const sliderStyles = (theme: Theme) => ({
  '& .MuiSlider-thumb': {
    backgroundColor: theme.palette.purple.main,
    border: `2.5px solid white`,

    boxShadow: '0 2px 8px textColor',
  },
  '& .MuiSlider-track': {
    backgroundColor: 'transparent',
    border: 'none',
  },
  '& .MuiSlider-rail': {
    color: theme.palette.grey[400],
  },
})
