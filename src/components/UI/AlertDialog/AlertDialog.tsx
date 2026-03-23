import {
  Dialog,
  Box,
  type DialogProps as MuiDialogProps,
  type SxProps,
  type Theme,
} from '@mui/material'
import { dialogStyles, topBoxStyles, bottomBoxStyles } from './styles'

import type { ReactNode } from 'react'
interface AlertDialogProps extends Omit<MuiDialogProps, 'open' | 'onClose'> {
  open: boolean
  onClose: () => void
  sx?: SxProps<Theme>
  topChildren?: ReactNode
  bottomChildren?: ReactNode
}

export const SGLAlertDialog = ({
  open,
  onClose,
  sx,
  topChildren,
  bottomChildren,
  ...props
}: AlertDialogProps) => {
  return (
    <Dialog
      {...props}
      open={open}
      onClose={onClose}
      sx={{
        ...dialogStyles,
        ...sx,
      }}
    >
      <Box sx={topBoxStyles}>{topChildren}</Box>

      <Box sx={bottomBoxStyles}>{bottomChildren}</Box>
    </Dialog>
  )
}
