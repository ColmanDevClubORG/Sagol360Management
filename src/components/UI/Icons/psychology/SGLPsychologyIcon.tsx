import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined'
import type { CSSProperties } from 'react'

interface SGLPsychologyIconProps {
  color?: string
  styles?: CSSProperties
}

export const SGLPsychologyIcon = ({ color, styles, ...props }: SGLPsychologyIconProps) => {
  return <PsychologyOutlinedIcon style={{ color, ...styles }} {...props} />
}
