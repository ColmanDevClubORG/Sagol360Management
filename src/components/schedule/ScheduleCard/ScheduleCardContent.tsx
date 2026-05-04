import { useTranslation } from 'react-i18next'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { ScheduleCardMeta } from './ScheduleCardMeta'
import type { ScheduleCardContentProps } from './types'
import { scheduleCardStyles } from './scheduleCardStyles'
import { getAppointmentTitleKey } from '@/utils/appointmentUtils'

export const ScheduleCardContent = ({ time, chamber }: ScheduleCardContentProps) => {
  const { t } = useTranslation()
  const titleKey = getAppointmentTitleKey(chamber)

  return (
    <div style={scheduleCardStyles.content}>
      <SGLTypography variant="smallTitle">{t(titleKey)}</SGLTypography>
      <ScheduleCardMeta time={time} />
      <SGLTypography variant="smallText">{t(chamber)}</SGLTypography>
    </div>
  )
}
