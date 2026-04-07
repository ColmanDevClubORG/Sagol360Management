import { useTranslation } from 'react-i18next'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { ScheduleCardMeta } from './ScheduleCardMeta'
import { scheduleCardStyles } from './styles'
import type { ScheduleCardContentProps } from './types'

export const ScheduleCardContent = ({
  title,
  time,
  durationMinutes,
  location,
}: ScheduleCardContentProps) => {
  const { t } = useTranslation()

  return (
    <div style={scheduleCardStyles.content}>
      <SGLTypography variant="smallTitle">{t(title)}</SGLTypography>
      <ScheduleCardMeta time={time} durationMinutes={durationMinutes} />
      <SGLTypography variant="smallText">{t(location)}</SGLTypography>
    </div>
  )
}
