import {
  Dialog,
  Box,
  type DialogProps as MuiDialogProps,
  type SxProps,
  type Theme,
  DialogContent,
} from '@mui/material'
import { dialogStyles, topBoxStyles, bottomBoxStyles } from './styles'
import { type ReactNode } from 'react'
import { SGLCloseIcon } from '../IconButton/SGLCloseIcon'

interface SGLAlertDialogProps extends Omit<MuiDialogProps, 'onClose'> {
  sx?: SxProps<Theme>
  topChildren?: ReactNode
  bottomChildren?: ReactNode
  onClose: () => void
}

export const SGLAlertDialog = ({
  sx,
  topChildren,
  bottomChildren,
  open,
  onClose,
  ...props
}: SGLAlertDialogProps) => {
  return (
    <Dialog
      {...props}
      open={open}
      onClose={onClose}
      sx={{
        ...dialogStyles,
        ...sx,
      }}
      scroll="paper"
    >
      <SGLCloseIcon onClick={onClose} />

      <Box sx={topBoxStyles}>
        <DialogContent>{topChildren}</DialogContent>
      </Box>

      <Box sx={bottomBoxStyles}>
        <DialogContent>{bottomChildren}</DialogContent>
      </Box>
    </Dialog>
  )
}
