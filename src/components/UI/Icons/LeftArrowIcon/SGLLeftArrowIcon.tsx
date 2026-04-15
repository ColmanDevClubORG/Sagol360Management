import { ChevronLeft } from 'lucide-react'
import type { CSSProperties } from 'react'
import { leftArrowStyles } from './styles'
interface ClockIconProps {
  size?: number
  styles?: CSSProperties
}
export const SGLLeftArrowIcon = ({ size = 20, styles, ...props }: ClockIconProps) => {
  return <ChevronLeft size={size} style={{ ...leftArrowStyles, ...styles }} {...props} />
}
