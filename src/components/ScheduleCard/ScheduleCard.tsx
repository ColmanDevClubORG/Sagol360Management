import { SGLButton } from '@/components/UI/Button/SGLButton'
import { SGLLeftArrowIcon } from '@/components/UI/Icons/LeftArrowIcon/SGLLeftArrowIcon'
import { ScheduleCardContent } from './ScheduleCardContent'
import { scheduleCardStyles } from './styles'
import type { ScheduleCardProps } from './types'

export const ScheduleCard = ({
  title,
  time,
  duration,
  location,
  borderColor,
  onClick = () => {},
}: ScheduleCardProps) => {
  return (
    <div
      style={{
        ...scheduleCardStyles.container,
        ...(borderColor ? { borderRight: `0.3rem solid ${borderColor}` } : {}),
      }}
    >
      {' '}
      <ScheduleCardContent title={title} time={time} duration={duration} location={location} />
      <SGLButton onClick={onClick} styles={scheduleCardStyles.actionButton}>
        <SGLLeftArrowIcon />
      </SGLButton>
    </div>
  )
}
