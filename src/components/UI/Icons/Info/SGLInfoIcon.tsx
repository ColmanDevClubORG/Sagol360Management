import { type CSSProperties } from 'react'
import { Info } from 'lucide-react'
import { theme } from '@/theme'
interface SGLInfoIconProps {
  styles?: CSSProperties
  color?: string
  size?: number
}
export const SGLInfoIcon = ({
  styles,
  color = theme.palette.purple.main,
  size = 30,
}: SGLInfoIconProps) => {
  return <Info style={styles} color={color} size={size} />
}
