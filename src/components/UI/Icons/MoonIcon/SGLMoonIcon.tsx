import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import type { CSSProperties } from 'react'

interface SGLMonnIconProps {
  color?: string
  styles?: CSSProperties
}

export const SGLMoonIcon = ({ color, styles, ...props }: SGLMonnIconProps) => {
  return <DarkModeOutlinedIcon style={{ color, ...styles }} {...props} />
}
