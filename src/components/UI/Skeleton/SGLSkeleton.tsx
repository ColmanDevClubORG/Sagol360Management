import Skeleton, {
  type SkeletonProps as MuiSkeletonProps,
} from '@mui/material/Skeleton'

import type { SxProps, Theme } from '@mui/material/styles'

interface SGLSkeletonProps
  extends Omit<MuiSkeletonProps, 'sx'> {
  skeletonColor?: string
  sx?: SxProps<Theme>
}

export const SGLSkeleton = ({
  skeletonColor = '#8F3DFF',
  animation = 'wave',
  sx,
  ...props
}: SGLSkeletonProps) => {
  return (
    <Skeleton
      sx={{
        bgcolor: skeletonColor,
        ...sx,
      }}
      animation={animation}
      {...props}
    />
  )
}