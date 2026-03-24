import { type CSSProperties, type ReactNode } from 'react'
import { SGLCloseIcon } from '../IconButton/SGLCloseIcon'
import { Dialog, Box, type DialogProps as MuiDialogProps, DialogContent } from '@mui/material'
import { dialogStyles, topBoxStyles, bottomBoxStyles } from './styles'

interface SGLAlertDialogProps extends Omit<MuiDialogProps, 'onClose'> {
  topChildren?: ReactNode
  bottomChildren?: ReactNode
  onClose: () => void
  styles?: CSSProperties
}

export const SGLAlertDialog = ({
  topChildren,
  bottomChildren,
  onClose,
  open: isOpen = false,
  styles,
  ...props
}: SGLAlertDialogProps) => {
  return (
    <Dialog
      {...props}
      open={isOpen}
      onClose={onClose}
      sx={{
        ...dialogStyles,
        ...styles,
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
