import { type CSSProperties } from 'react'
import { IdCard } from 'lucide-react'
import { theme } from '@/theme'
interface SGLIDProps {
  styles?: CSSProperties
  color?: string
  size?: number
}
export const SGLID = ({ styles, color = theme.palette.midGrey.main, size }: SGLIDProps) => {
  return <IdCard style={styles} color={color} size={size} />
}
