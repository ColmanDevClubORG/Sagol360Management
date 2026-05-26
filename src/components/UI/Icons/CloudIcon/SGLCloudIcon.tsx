import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined'
import type { CSSProperties } from 'react'

interface SGLCloudIconProps {
  color?: string
  styles?: CSSProperties
}

export const SGLCloudIcon = ({ color, styles, ...props }: SGLCloudIconProps) => {
  return <CloudOutlinedIcon style={{ color, ...styles }} {...props} />
}
