import Select, { type SelectProps as MuiSelectProps } from '@mui/material/Select'
import { selectStyles } from './styles'
import { MenuItem } from '@mui/material'
import { type ReactElement, isValidElement } from 'react'

type SelectOption = string | number | ReactElement

interface SelectProps extends Omit<MuiSelectProps, 'style'> {
  options?: SelectOption[]
}

export const SGLSelect = ({ options = [], variant = 'standard', ...props }: SelectProps) => {
  return (
    <Select
      sx={selectStyles}
      disableUnderline
      variant={variant}
      defaultValue={options[0]}
      {...props}
    >
      {options.map((option, index) =>
        isValidElement(option) ? (
          option
        ) : (
          <MenuItem key={{ option } + '-' + { index }} value={option as string}>
            {option}
          </MenuItem>
        ),
      )}
    </Select>
  )
}
