import Select, { type SelectProps as MuiSelectProps } from '@mui/material/Select'
import { selectStyles } from './styles'
import { MenuItem } from '@mui/material'

interface SelectProps extends Omit<MuiSelectProps, 'style'> {
  options: string[]
}

export const SGLSelect = ({ options, ...props }: SelectProps) => {
  return (
    <Select
      sx={selectStyles}
      variant="standard"
      disableUnderline
      defaultValue={options[0]}
      {...props}
    >
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  )
}
