import TextField, { type TextFieldProps } from '@mui/material/TextField'
import { type SxProps, type Theme } from '@mui/material/styles'
import { inputStyles } from './styles'
import { InputAdornment } from '@mui/material'
import type { ReactNode } from 'react'

interface InputProps extends Omit<TextFieldProps, 'style'> {
  label?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  style?: SxProps<Theme>
  icon?: ReactNode
}

export const SGLInput = ({
  label,
  value,
  onChange,
  style,
  variant = 'outlined',
  fullWidth = true,
  icon,
  slotProps,
  ...props
}: InputProps) => {
  return (
    <TextField
      {...props}
      label={label}
      value={value}
      onChange={onChange}
      variant={variant}
      fullWidth={fullWidth}
      slotProps={{
        ...slotProps,
        input: {
          ...slotProps?.input,
          startAdornment: icon ? <InputAdornment position="start">{icon}</InputAdornment> : null,
        },
        htmlInput: {
          ...slotProps?.htmlInput,
        },
      }}
      sx={{
        ...inputStyles,
        ...style,
      }}
    />
  )
}
