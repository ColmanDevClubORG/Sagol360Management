import Skeleton, { type SkeletonProps as MuiSkeletonProps } from '@mui/material/Skeleton'

import type { CSSProperties } from '@mui/material/styles'
import { skeletonStyles } from './styles'

interface SGLSkeletonProps extends Omit<MuiSkeletonProps, 'style' | 'sx'> {
  style?: CSSProperties
}

export const SGLSkeleton = ({ animation = 'wave', style, ...props }: SGLSkeletonProps) => {
  return (
    <Skeleton
      sx={(theme) => ({
        ...skeletonStyles(theme),
        ...style,
      })}
      animation={animation}
      {...props}
    />
  )
}
