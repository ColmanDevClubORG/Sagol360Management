import { SGLButton } from '@/components/UI/Button/SGLButton'
import { SGLLeftArrowIcon } from '@/components/UI/Icons/LeftArrowIcon/SGLLeftArrowIcon'
import { ScheduleCardContent } from './ScheduleCardContent'
import { SGLContainer } from '../../UI/Container/SGLContainer'
import { type Appointment, appointmentStatusColors } from '../../BottomSheetDialog/types'
import { scheduleCardStyles } from './scheduleCardStyles'

interface ScheduleCardProps extends Appointment {
  onClick: () => void
}

export const ScheduleCard = ({ time, chamber, status, onClick }: ScheduleCardProps) => {
  return (
    <SGLContainer
      onClick={onClick}
      styles={{
        ...scheduleCardStyles.container,
        borderRightColor: appointmentStatusColors[status],
      }}
    >
      <ScheduleCardContent time={time} chamber={chamber} />
      <SGLButton onClick={() => {}} styles={scheduleCardStyles.actionButton}>
        <SGLLeftArrowIcon />
      </SGLButton>
    </SGLContainer>
  )
}
