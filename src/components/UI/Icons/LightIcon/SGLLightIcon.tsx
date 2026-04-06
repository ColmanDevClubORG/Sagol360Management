import { type CSSProperties } from 'react'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates'
import { lightIconStyles } from './styles'

interface LightIconProps {
  styles?: CSSProperties
}
export const SGLLightIcon = ({ styles, ...props }: LightIconProps) => {
  return <TipsAndUpdatesIcon sx={{ ...lightIconStyles, ...styles }} {...props} />
}
