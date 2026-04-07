import { Clock4Icon } from 'lucide-react'
import { clockIconStyles } from './styles'
import type { CSSProperties } from 'react'
interface ClockIconProps {
  size?: number
  styles?: CSSProperties
}

export const SGLClockIcon = ({ size = 15, styles, ...props }: ClockIconProps) => {
  return <Clock4Icon size={size} style={{ ...clockIconStyles, ...styles }} {...props} />
}
