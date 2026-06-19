import { Slider } from '@mui/material'
import { sliderStyles } from './styles'
import type { CSSProperties } from 'react'
import { type SliderProps as MuiSliderProps } from '@mui/material'
import { useIsRtl } from '@/hooks/useIsRtl'

interface sliderProps extends Omit<MuiSliderProps, 'onChange'> {
  onChange: (value: number) => void
  style?: CSSProperties
}

export const SGLSlider = ({ onChange, style, ...props }: sliderProps) => {
  const isRtl = useIsRtl()
  return (
    <Slider
      {...props}
      dir={isRtl ? 'rtl' : 'ltr'}
      sx={(theme) => ({ ...sliderStyles(theme, isRtl), ...style })}
      onChange={(_, value) => onChange(value as number)}
    />
  )
}
