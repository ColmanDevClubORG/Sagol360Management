import { ExternalLink } from 'lucide-react'

import { type LucideProps } from 'lucide-react'
import type { CSSProperties } from 'react'

interface LinkIconProps extends LucideProps {
  styles?: CSSProperties
  color?: string
  size?: number
  strokeWidth?: number
}
export const SGLLink = ({
  size = 16,
  color = 'white',
  styles,
  strokeWidth = 2,
  ...props
}: LinkIconProps) => {
  return (
    <ExternalLink size={size} strokeWidth={strokeWidth} style={styles} color={color} {...props} />
  )
}
