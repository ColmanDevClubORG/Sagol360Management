import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined'
import type { CSSProperties } from 'react'

interface SGLSmileIconProps {
  color?: string
  styles?: CSSProperties
}

export const SGLSmileIcon = ({ color, styles, ...props }: SGLSmileIconProps) => {
  return <SentimentSatisfiedAltOutlinedIcon style={{ color, ...styles }} {...props} />
}
