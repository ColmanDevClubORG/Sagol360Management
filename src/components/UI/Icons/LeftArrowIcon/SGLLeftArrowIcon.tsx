import { ChevronLeft } from 'lucide-react'
import type { CSSProperties } from 'react'
import { leftArrowStyles } from './styles'
import { theme } from '@/theme'
interface ClockIconProps {
  size?: number
  styles?: CSSProperties
  color?: string
}
export const SGLLeftArrowIcon = ({
  size = 20,
  styles,
  color = theme.palette.midGrey.main,
  ...props
}: ClockIconProps) => {
  return (
    <ChevronLeft size={size} color={color} style={{ ...leftArrowStyles, ...styles }} {...props} />
  )
}
