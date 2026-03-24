import {
  type SxProps,
  type Theme,
  type LinearProgressProps as MuiLinearProgressProps,
  LinearProgress,
} from '@mui/material'
import { linearProgressStyles } from './styles'

interface LinearProgressProps extends Omit<MuiLinearProgressProps, 'value' | 'style'> {
  value: number
  style?: SxProps<Theme>
}

export const SGLLinearProgress = ({
  value,
  style,
  variant = 'determinate',
  ...props
}: LinearProgressProps) => {
  return (
    <LinearProgress
      variant={variant}
      value={value}
      {...props}
      sx={{
        ...linearProgressStyles,
        ...style,
      }}
    />
  )
}
