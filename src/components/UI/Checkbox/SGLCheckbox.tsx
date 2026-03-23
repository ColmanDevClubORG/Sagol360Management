import { Checkbox, FormControlLabel, type CheckboxProps as MuiCheckboxProps } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'

interface CheckboxProps extends Omit<MuiCheckboxProps, 'sx' | 'style'> {
  label?: string
  style?: SxProps<Theme>
  labelColor?: string
}

export const SGLCheckbox = ({ label, style, labelColor, ...props }: CheckboxProps) => {
  return (
    <FormControlLabel
      dir="rtl"
      control={<Checkbox sx={style} {...props} />}
      label={label ?? ''}
      sx={{ color: labelColor }}
    />
  )
}
