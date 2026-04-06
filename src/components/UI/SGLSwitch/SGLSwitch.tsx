import React from 'react'
import { SGLSwitchContainer, SGLToggleButton } from './styles'

interface SGLOption {
  label: string
  value: string
}

interface SGLSwitchProps {
  options: SGLOption[]
  value: string
  onChange: (newValue: string) => void
}

export const SGLSwitch = ({ options, value, onChange }: SGLSwitchProps) => {
  const handleChange = (_event: React.MouseEvent<HTMLElement>, newValue: string | null) => {
    if (newValue !== null) {
      onChange(newValue)
    }
  }

  return (
    <SGLSwitchContainer value={value} exclusive onChange={handleChange}>
      {options.map((option) => (
        <SGLToggleButton key={option.value} value={option.value}>
          {option.label}
        </SGLToggleButton>
      ))}
    </SGLSwitchContainer>
  )
}
