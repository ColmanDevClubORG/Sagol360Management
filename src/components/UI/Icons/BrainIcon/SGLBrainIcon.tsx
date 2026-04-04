import type { CSSProperties } from '@mui/material'
import { Brain, type LucideProps } from 'lucide-react'

interface SGLBrainIconProps extends LucideProps {
  styles?: CSSProperties
  color?: string
  size?: number
  strokeWidth?: number
}

export const SGLBrainIcon = ({
  color = 'white',
  strokeWidth,
  size,
  styles,
  ...props
}: SGLBrainIconProps) => {
  return <Brain color={color} strokeWidth={strokeWidth} size={size} style={styles} {...props} />
}
