import { QrCode } from 'lucide-react'
import type { CSSProperties } from 'react'
interface SGLQrIconProps {
  size?: number
  color?: string
  styles?: CSSProperties
}
export const SGLQrIcon = ({ size, color, styles, ...props }: SGLQrIconProps) => {
  return <QrCode size={size} color={color} style={{ ...styles }} {...props} />
}
