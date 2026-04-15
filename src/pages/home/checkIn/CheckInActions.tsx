import { buttonsContainerStyle } from './style'
import { CheckInOptions } from './CheckInOptions'
import { CheckedButton } from './CheckedButton'

interface CheckInActionsProps {
  onDone: () => void
  onCheckIn: () => void
  isCheckedIn: boolean
}

export const CheckInActions = ({ onDone, onCheckIn, isCheckedIn }: CheckInActionsProps) => {
  return (
    <div style={buttonsContainerStyle}>
      {isCheckedIn ? <CheckedButton onDone={onDone} /> : <CheckInOptions onCheckIn={onCheckIn} />}
    </div>
  )
}
