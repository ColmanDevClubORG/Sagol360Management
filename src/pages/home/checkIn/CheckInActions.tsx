import { buttonsContainerStyle } from './style'
import { CheckInOptions } from './CheckInOptions'
import { CheckedButton } from './CheckedButton'
import type { AttendanceStatus } from '@/types/attendance.types'

interface CheckInActionsProps {
  attendanceStatus?: AttendanceStatus
  onCheckIn: () => void
  onCancel: () => void
  isPending: boolean
}

export const CheckInActions = ({
  attendanceStatus,
  onCheckIn,
  onCancel,
  isPending,
}: CheckInActionsProps) => {
  return (
    <div style={buttonsContainerStyle}>
      {attendanceStatus ? (
        <CheckedButton attendanceStatus={attendanceStatus} />
      ) : (
        <CheckInOptions onCheckIn={onCheckIn} onCancel={onCancel} isPending={isPending} />
      )}
    </div>
  )
}
