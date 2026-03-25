import type { CSSProperties } from 'react'
import { IconButton, type IconButtonProps as MuiIconButtonProps } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { closeIconStyles } from './styles'

interface IconButtonProps extends Omit<MuiIconButtonProps, 'onClick'> {
  onClick: () => void
  styles?: CSSProperties
}

export const SGLCloseIcon = ({ onClick, styles, ...props }: IconButtonProps) => {
  return (
    <IconButton sx={{ ...closeIconStyles, ...styles }} onClick={onClick} {...props}>
      <CloseIcon />
    </IconButton>
  )
}
