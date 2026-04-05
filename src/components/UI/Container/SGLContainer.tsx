import Box, { type BoxProps } from '@mui/material/Box'
import { forwardRef, type CSSProperties } from 'react'
import { containerStyles } from './styles'

interface SGLContainerProps extends Omit<BoxProps, 'sx' | 'style'> {
  styles?: CSSProperties
}
export const SGLContainer = forwardRef<HTMLElement, SGLContainerProps>(
  ({ styles, ...props }, ref) => {
    return <Box sx={{ ...containerStyles, ...styles }} ref={ref} {...props} />
  },
)
