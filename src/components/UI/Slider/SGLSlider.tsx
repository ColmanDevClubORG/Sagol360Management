import { Slider } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'

interface SliderProps {
  value: number
  onChange: (event: Event, newValue: number | number[]) => void
  min?: number
  max?: number
  step?: number
  style?: SxProps<Theme>
}

const sliderStyles = (theme: Theme) => ({
  '& .MuiSlider-thumb': {
    backgroundColor: theme.palette.purple.main,
    border: `2.5px solid white`,

    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  },
  '& .MuiSlider-track': {
    backgroundColor: 'transparent',
    border: 'none',
  },
  '& .MuiSlider-rail': {
    color: theme.palette.grey[400],
    padding: '0.5px',
  },
})

export const SGLSlider = ({ value, onChange, min = 1, max = 10, step }: SliderProps) => {
  return (
    <Slider sx={sliderStyles} value={value} min={min} max={max} step={step} onChange={onChange} />
  )
}
