import TripOriginIcon from '@mui/icons-material/TripOrigin'
import type { CSSProperties } from 'react'

interface SGLCircleIconProps {
  color?: string
  styles?: CSSProperties
}

export const SGLCircleIcon = ({ color, styles, ...props }: SGLCircleIconProps) => {
  return <TripOriginIcon style={{ color, ...styles }} {...props} />
}
