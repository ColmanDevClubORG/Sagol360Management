import { Slider } from '@mui/material'
import { sliderStyles } from './styles'
import type { CSSProperties } from 'react'
import { type SliderProps as MuiSliderProps } from '@mui/material'

interface sliderProps extends Omit<MuiSliderProps, 'onChange'> {
  onChange: (value: number) => void
  style?: CSSProperties
}

export const SGLSlider = ({ onChange, style, ...props }: sliderProps) => {
  return (
    <Slider
      sx={{ ...sliderStyles, ...style }}
      onChange={(_, value) => onChange(value as number)}
      {...props}
    />
  )
}
