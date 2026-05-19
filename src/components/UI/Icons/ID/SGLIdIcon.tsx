import { type CSSProperties } from 'react'
import { IdCard } from 'lucide-react'
import { theme } from '@/theme'
interface SGLIdIconProps {
  styles?: CSSProperties
  color?: string
  size?: number
}
export const SGLIdIcon = ({ styles, color = theme.palette.midGrey.main, size }: SGLIdIconProps) => {
  return <IdCard style={styles} color={color} size={size} />
}
