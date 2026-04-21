import { useTranslation } from 'react-i18next'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { ScheduleCardMeta } from './ScheduleCardMeta'
import type { ScheduleCardContentProps } from './types'
import { scheduleCardStyles } from './scheduleCardStyles'

export const ScheduleCardContent = ({
  title,
  startAt,
  durationMinutes,
  location,
}: ScheduleCardContentProps) => {
  const { t } = useTranslation()

  return (
    <div style={scheduleCardStyles.content}>
      <SGLTypography variant="smallTitle">{t(title)}</SGLTypography>
      <ScheduleCardMeta startAt={startAt} durationMinutes={durationMinutes} />
      <SGLTypography variant="smallText">{t(location)}</SGLTypography>
    </div>
  )
}
