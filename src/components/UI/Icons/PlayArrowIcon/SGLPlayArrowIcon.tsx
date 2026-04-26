import type { CSSProperties } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

interface SGLPlayArrowIconProps {
  style?: CSSProperties
}

export const SGLPlayArrowIcon = ({ style }: SGLPlayArrowIconProps) => {
  return <PlayArrowIcon style={style} />
}
