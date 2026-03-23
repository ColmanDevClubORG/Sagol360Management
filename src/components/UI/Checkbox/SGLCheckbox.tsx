import { Checkbox, FormControlLabel, type CheckboxProps as MuiCheckboxProps } from '@mui/material'
import { checkboxStyles } from './styles'
import type { CSSProperties } from '@mui/material/styles'

interface CheckboxProps extends Omit<MuiCheckboxProps, 'sx' | 'style'> {
  label?: string
  style?: CSSProperties
}

export const SGLCheckbox = ({ label, style, ...props }: CheckboxProps) => {
  return (
    <FormControlLabel
      control={<Checkbox {...props} />}
      label={label ?? ''}
      sx={{ ...checkboxStyles, ...style }}
    />
  )
}
