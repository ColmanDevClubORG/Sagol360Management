import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import type { CSSProperties } from 'react'

interface SGLHeartIconProps {
  color?: string
  styles?: CSSProperties
}

export const SGLHeartIcon = ({ color, styles, ...props }: SGLHeartIconProps) => {
  return <FavoriteBorderOutlinedIcon style={{ color, ...styles }} {...props} />
}
