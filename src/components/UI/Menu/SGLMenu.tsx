import Menu, { type MenuProps as MuiMenuProps } from '@mui/material/Menu'
import type { CSSProperties, ReactNode } from 'react'

interface SGLMenuProps extends Omit<MuiMenuProps, 'open'> {
  isOpen?: boolean
  children: ReactNode
  styles?: CSSProperties
}

export const SGLMenu = ({ isOpen = false, children, styles, ...props }: SGLMenuProps) => {
  return (
    <Menu {...props} open={isOpen} sx={styles}>
      {children}
    </Menu>
  )
}
