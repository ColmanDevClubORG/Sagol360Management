import { buttonsContainer } from './style'
import type { CSSProperties } from '@mui/material'
import { CheckInOptions } from './CheckInOptions'
import { CheckedButton } from './CheckedButton'

interface CheckInActionsProps {
  onClose: () => void
  onCheckIn: () => void
  isCheckedIn: boolean
  style?: CSSProperties
}

export const CheckInActions = ({ onClose, onCheckIn, isCheckedIn }: CheckInActionsProps) => {
  return (
    <div style={buttonsContainer}>
      {isCheckedIn ? <CheckedButton onClose={onClose} /> : <CheckInOptions onCheckIn={onCheckIn} />}
    </div>
  )
}
