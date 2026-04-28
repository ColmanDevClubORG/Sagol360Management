import { useState } from 'react'
import { MetricCardHeader } from './metricCardHeader'
import { MetricCardLabel } from './metricCardLabel'
import { rootStyle } from './style'
import { SGLSlider } from '@/components/UI/Slider/SGLSlider'

interface MetricCardProps {
  titleKey: string
  icon: React.ReactNode
  onChange: (value: number) => void
  minLabelKey: string
  maxLabelKey: string
}

export const MetricCard = ({
  titleKey,
  icon,
  onChange,
  minLabelKey,
  maxLabelKey,
}: MetricCardProps) => {
  const [sliderValue, setSliderValue] = useState(1)

  const handleUpdate = (newValue: number) => {
    onChange(newValue)
    setSliderValue(newValue)
  }

  return (
    <div style={rootStyle}>
      <MetricCardHeader titleKey={titleKey} icon={icon} value={sliderValue} />
      <SGLSlider onChange={handleUpdate} value={sliderValue} min={1} max={10} />
      <MetricCardLabel minLabelKey={minLabelKey} maxLabelKey={maxLabelKey} />
    </div>
  )
}
