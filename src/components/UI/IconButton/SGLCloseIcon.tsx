import type { SxProps, Theme } from '@mui/material/styles'
import { IconButton, type IconButtonProps as MuiIconButtonProps } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { closeIconStyles } from './styles'

interface IconButtonProps extends Omit<MuiIconButtonProps, 'onClick' | 'style'> {
  onClick: () => void
  style?: SxProps<Theme>
}

export const SGLCloseIcon = ({ onClick, style, ...props }: IconButtonProps) => {
  return (
    <IconButton sx={{ ...style, ...closeIconStyles }} onClick={onClick} {...props}>
      <CloseIcon />
    </IconButton>
  )
}
