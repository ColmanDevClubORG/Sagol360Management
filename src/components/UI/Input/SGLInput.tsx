import TextField, { type TextFieldProps } from '@mui/material/TextField'
import { type SxProps, type Theme } from '@mui/material/styles'
import { inputStyles } from './styles'
import { InputAdornment } from '@mui/material'
import type { ReactNode } from 'react'

interface InputProps extends Omit<TextFieldProps, 'style' | 'slotProps'> {
  label?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  style?: SxProps<Theme>
  icon?: ReactNode
  customInputProps?: TextFieldProps['slotProps']
}

export const SGLInput = ({
  label,
  value,
  onChange,
  style,
  variant = 'outlined',
  fullWidth = true,
  icon,
  customInputProps,
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
        ...customInputProps,
        input: {
          ...customInputProps?.input,
          startAdornment: icon ? <InputAdornment position="start">{icon}</InputAdornment> : null,
        },
        htmlInput: {
          ...customInputProps?.htmlInput,
        },
      }}
      sx={{
        ...inputStyles,
        ...style,
      }}
    />
  )
}
