import Skeleton, { type SkeletonProps as MuiSkeletonProps } from '@mui/material/Skeleton'
import { type ReactNode } from 'react'
import { type SxProps, type Theme } from '@mui/material/styles'

interface SGLSkeletonProps extends Omit<MuiSkeletonProps, 'children'> {
  children?: ReactNode
  width?: number | string
  height?: number | string
  textSize?: number | string
  skeletonColor?: string
  radius?: number | string
  opacity?: number
  sx?: SxProps<Theme>
}

export const SGLSkeleton = ({
  children,
  variant = 'text',
  animation = 'wave',
  width,
  height,
  textSize = '1rem',
  skeletonColor = '#8F3DFF',
  radius,
  opacity = 1,
  sx,
  ...props
}: SGLSkeletonProps) => {
  return (
    <Skeleton
      variant={variant}
      animation={animation}
      width={width}
      height={height}
      sx={{
        ...(variant === 'text' ? { fontSize: textSize } : {}),
        bgcolor: skeletonColor,
        borderRadius: radius,
        opacity,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Skeleton>
  )
}