import { QrCode } from 'lucide-react'
import type { CSSProperties } from 'react'
interface SGLQRProps {
  size?: number
  color?: string
  styles?: CSSProperties
}
export const SGLQR = ({ size, color, styles, ...props }: SGLQRProps) => {
  return <QrCode size={size} color={color} style={{ ...styles }} {...props} />
}
