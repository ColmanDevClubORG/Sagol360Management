import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined'
import type { CSSProperties } from 'react'

interface SGLElectricIconProps {
  color?: string
  styles?: CSSProperties
}

export const SGLElectricIcon = ({ color, styles, ...props }: SGLElectricIconProps) => {
  return <ElectricBoltOutlinedIcon style={{ color, ...styles }} {...props} />
}
