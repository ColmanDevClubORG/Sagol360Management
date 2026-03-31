import { type ReactNode } from 'react'
import {
  CircularProgress,
  type SxProps,
  type Theme,
  type CircularProgressProps as MuiCircularProgressProps,
} from '@mui/material'
import { SGLTypography } from '../Typography/SGLTypography'
import {
  circularProgressStyles,
  circularProgressWrapperStyles,
  circularProgressLabelStyles,
} from './styles'

interface CircularProgressProps extends Omit<MuiCircularProgressProps, 'value' | 'style'> {
  value: number
  style?: SxProps<Theme>
  isTrackSlot?: boolean
  label?: ReactNode
}

export const SGLCircularProgress = ({
  value,
  style,
  variant = 'determinate',
  isTrackSlot = true,
  size = 50,
  label,
  ...props
}: CircularProgressProps) => {
  return (
    <div style={circularProgressWrapperStyles}>
      <CircularProgress
        enableTrackSlot={isTrackSlot}
        variant={variant}
        value={value}
        size={size}
        sx={{ ...style, ...circularProgressStyles }}
        {...props}
      />
      {label && (
        <div style={circularProgressLabelStyles}>
          <SGLTypography variant="mediumTitle">{label}</SGLTypography>
        </div>
      )}
    </div>
  )
}
