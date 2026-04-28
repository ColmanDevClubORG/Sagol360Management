import { useState } from 'react'
import { MetricCardHeader } from './metricCardHeader'
import { MetricCardLabel } from './metricCardLabel'
import { rootStyle } from './style'
import { SGLSlider } from '@/components/UI/Slider/SGLSlider'
import type { ReactNode } from 'react'

export type PaletteColorKey = 'primary' | 'secondary' | 'error' | 'midGrey' | 'yellow' | 'green'

interface MetricCardProps {
  titleKey: string
  icon: ReactNode
  onChange: (value: number) => void
  minLabelKey: string
  maxLabelKey: string
  colorIcon: PaletteColorKey
}

export const MetricCard = ({
  titleKey,
  icon,
  onChange,
  minLabelKey,
  maxLabelKey,
  colorIcon,
}: MetricCardProps) => {
  const [sliderValue, setSliderValue] = useState(1)

  const handleUpdate = (newValue: number) => {
    onChange(newValue)
    setSliderValue(newValue)
  }

  return (
    <div style={rootStyle}>
      <MetricCardHeader titleKey={titleKey} icon={icon} value={sliderValue} colorIcon={colorIcon} />
      <SGLSlider onChange={handleUpdate} value={sliderValue} min={1} max={10} />
      <MetricCardLabel minLabelKey={minLabelKey} maxLabelKey={maxLabelKey} />
    </div>
  )
}
