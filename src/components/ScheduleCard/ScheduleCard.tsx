import { SGLButton } from '@/components/UI/Button/SGLButton'
import { SGLLeftArrowIcon } from '@/components/UI/Icons/LeftArrowIcon/SGLLeftArrowIcon'
import { ScheduleCardContent } from './ScheduleCardContent'
import { scheduleCardStyles } from './styles'
import { SGLContainer } from '../UI/Container/SGLContainer'
import { type Appointment, appointmentColors } from '../BottomSheetDialog/types'

interface ScheduleCardProps extends Appointment {
  onClick: () => void
}

export const ScheduleCard = ({
  title,
  time,
  durationMinutes,
  location,
  type,
  onClick,
}: ScheduleCardProps) => {
  return (
    <SGLContainer
      onClick={onClick}
      styles={{
        ...scheduleCardStyles.container,
        borderRightColor: appointmentColors[type],
      }}
    >
      <ScheduleCardContent
        title={title}
        time={time}
        durationMinutes={durationMinutes}
        location={location}
      />
      <SGLButton onClick={() => {}} styles={scheduleCardStyles.actionButton}>
        <SGLLeftArrowIcon />
      </SGLButton>
    </SGLContainer>
  )
}
