import TextField, { type TextFieldProps } from '@mui/material/TextField'
import { type SxProps, type Theme } from '@mui/material/styles'
import { inputStyles } from './styles'

interface InputProps extends Omit<TextFieldProps, 'style'> {
  label?: string
  value?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  style?: SxProps<Theme>
}

export const SGLInput = ({
  label,
  value,
  onChange,
  style,
  variant = 'outlined',
  fullWidth = true,
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
      sx={{
        ...inputStyles,
        ...style,
      }}
    />
  )
}
