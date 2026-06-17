import { buttonsContainerStyle } from './style'
import { CheckInOptions } from './CheckInOptions'
import { CheckedButton } from './CheckedButton'

interface CheckInActionsProps {
  onDone: () => void
  onCheckIn: () => void
  onCancel: () => void
  isCheckedIn: boolean
  isPending: boolean
}

export const CheckInActions = ({
  onDone,
  onCheckIn,
  onCancel,
  isCheckedIn,
  isPending,
}: CheckInActionsProps) => {
  return (
    <div style={buttonsContainerStyle}>
      {isCheckedIn ? (
        <CheckedButton onDone={onDone} />
      ) : (
        <CheckInOptions onCheckIn={onCheckIn} onCancel={onCancel} isPending={isPending} />
      )}
    </div>
  )
}
