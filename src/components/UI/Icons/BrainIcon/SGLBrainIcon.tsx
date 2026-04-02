import type { CSSProperties } from '@mui/material'
import { Brain, type LucideProps } from 'lucide-react'

interface SGLBrainIconProps extends LucideProps {
  stlyes?: CSSProperties
  color?: string
  size?: number
  strokeWidth?: number
}

export const SGLBrainIcon = ({
  color = 'white',
  strokeWidth,
  size,
  stlyes,
  ...props
}: SGLBrainIconProps) => {
  return <Brain color={color} strokeWidth={strokeWidth} size={size} style={stlyes} {...props} />
}
