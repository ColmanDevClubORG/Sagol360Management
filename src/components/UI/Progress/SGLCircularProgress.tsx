import {
  CircularProgress,
  type SxProps,
  type Theme,
  type CircularProgressProps as MuiCircularProgressProps,
} from '@mui/material'
import { circularProgressStyles } from './styles'

interface CircularProgressProps extends Omit<MuiCircularProgressProps, 'value' | 'style'> {
  value: number
  style?: SxProps<Theme>
  isTrackSlot?: boolean
}

export const SGLCircularProgress = ({
  value,
  style,
  variant = 'determinate',
  isTrackSlot = true,
  size = 50,
  ...props
}: CircularProgressProps) => {
  return (
    <CircularProgress
      enableTrackSlot={isTrackSlot}
      variant={variant}
      value={value}
      size={size}
      sx={{ ...style, ...circularProgressStyles }}
      {...props}
    />
  )
}
