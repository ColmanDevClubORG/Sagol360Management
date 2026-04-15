import React from 'react'
import { useTheme } from '@mui/material'
import { SGLSwitchContainer, SGLToggleButton } from './styles'
import { SGLTypography } from '../Typography/SGLTypography'

interface SGLOption {
  label: string
  value: string
}

interface SGLSwitchProps {
  options: SGLOption[]
  value?: string
  onChange: (newValue: string) => void
}

export const SGLSwitch = ({ options, value, onChange }: SGLSwitchProps) => {
  const theme = useTheme()
  const currentValue = value ?? options[0]?.value ?? ''

  const handleChange = (_event: React.MouseEvent<HTMLElement>, newValue: string | null) => {
    if (newValue !== null) {
      onChange(newValue)
    }
  }

  return (
    <SGLSwitchContainer value={currentValue} exclusive onChange={handleChange}>
      {options.map((option) => {
        const isSelected = option.value === currentValue
        return (
          <SGLToggleButton key={option.value} value={option.value}>
            <SGLTypography
              variant={isSelected ? 'smallTitle' : 'mediumText'}
              color={isSelected ? theme.palette.purple.main : theme.palette.midGrey.main}
            >
              {option.label}
            </SGLTypography>
          </SGLToggleButton>
        )
      })}
    </SGLSwitchContainer>
  )
}
