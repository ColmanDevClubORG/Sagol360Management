import { Slider } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import { sliderStyles } from './styles'

interface SliderProps {
  value: number
  onChange: (event: Event, newValue: number | number[]) => void
  min?: number
  max?: number
  step?: number
  style?: SxProps<Theme>
}

export const SGLSlider = ({ value, onChange, min = 1, max = 10, step }: SliderProps) => {
  return (
    <Slider sx={sliderStyles} value={value} min={min} max={max} step={step} onChange={onChange} />
  )
}
