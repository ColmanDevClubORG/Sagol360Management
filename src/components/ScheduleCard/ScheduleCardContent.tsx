import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { ScheduleCardMeta } from './ScheduleCardMeta'
import { scheduleCardStyles } from './styles'
import type { ScheduleCardContentProps } from './types'
import { useTranslation } from 'react-i18next'

export const ScheduleCardContent = ({
  title,
  time,
  duration,
  location,
}: ScheduleCardContentProps) => {
  const { t } = useTranslation()
  return (
    <div style={scheduleCardStyles.content}>
      <SGLTypography variant="mediumTitle">{t(title)}</SGLTypography>
      <ScheduleCardMeta time={time} duration={duration} />
      <SGLTypography variant="smallText">{t(location)}</SGLTypography>
    </div>
  )
}
