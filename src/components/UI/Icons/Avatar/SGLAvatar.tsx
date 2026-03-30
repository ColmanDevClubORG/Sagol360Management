import { Avatar, type AvatarProps as MuiAvatarProps } from '@mui/material'
import type { CSSProperties, ReactNode } from 'react'

export interface SGLAvatarProps extends MuiAvatarProps {
  children: ReactNode
  styles?: CSSProperties
}

export const SGLAvatar = ({ children, styles, ...props }: SGLAvatarProps) => {
  return (
    <Avatar sx={{ ...styles }} {...props}>
      {children}
    </Avatar>
  )
}
