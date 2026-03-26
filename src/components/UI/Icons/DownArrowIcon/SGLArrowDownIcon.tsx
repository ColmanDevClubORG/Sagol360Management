import type { CSSProperties } from 'react'
import { type SvgIconProps as MuiSvgIconProps } from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { arrowDownStyles } from './styles'

interface ArrowDownwardIconProps extends MuiSvgIconProps {
  styles?: CSSProperties
}

export const SGLArrowDownwardIcon = ({ styles, ...props }: ArrowDownwardIconProps) => {
  return <ArrowDownwardIcon sx={{ ...arrowDownStyles, ...styles }} {...props} />
}
