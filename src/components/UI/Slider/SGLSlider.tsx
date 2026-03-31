import { Slider } from '@mui/material'
import { sliderStyles } from './styles'
import { type SliderProps as MuiSliderProps } from '@mui/material'

interface sliderProps extends Omit<MuiSliderProps, 'onChange'> {
  onChange: (event: Event, value: number) => void
}

export const SGLSlider = ({ onChange, ...props }: sliderProps) => {
  return (
    <Slider
      sx={sliderStyles}
      onChange={(event, value) => onChange(event, value as number)}
      {...props}
    />
  )
}
