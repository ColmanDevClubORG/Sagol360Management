import React, { useState } from 'react'
import { SGLSwitchContainer, SGLToggleButton } from './styles'

export const SGLSwitch = () => {
  const [alignment, setAlignment] = useState<string | null>('patient')

  const handleChange = (_event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment)
    }
  }

  return (
    <SGLSwitchContainer value={alignment} exclusive onChange={handleChange}>
      <SGLToggleButton value="patient">מטופל</SGLToggleButton>
      <SGLToggleButton value="staff">איש צוות</SGLToggleButton>
    </SGLSwitchContainer>
  )
}
