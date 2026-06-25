import { Slider } from '@mui/material'
import { sliderStyles } from './styles'
import type { CSSProperties } from 'react'
import { type SliderProps as MuiSliderProps } from '@mui/material'
import { useDirection } from '@/hooks/useDirection'

interface sliderProps extends Omit<MuiSliderProps, 'onChange'> {
  onChange: (value: number) => void
  style?: CSSProperties
}

export const SGLSlider = ({ onChange, style, ...props }: sliderProps) => {
  const isRtl = useDirection()
  return (
    <Slider
      {...props}
      dir={isRtl ? 'rtl' : 'ltr'}
      sx={(theme) => ({ ...sliderStyles(theme, isRtl), ...style })}
      onChange={(_, value) => onChange(value as number)}
    />
  )
}
