import { SGLClockIcon } from '@/components/UI/Icons/ClockIcon/SGLClockIcon'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import type { ScheduleCardMetaProps } from './types'
import { DOT } from '@/constants'
import { scheduleCardStyles } from './scheduleCardStyles'
import { useTranslation } from 'react-i18next'

export const ScheduleCardMeta = ({ time }: ScheduleCardMetaProps) => {
  const { t } = useTranslation()

  return (
    <div style={scheduleCardStyles.meta}>
      <div style={scheduleCardStyles.timeRow}>
        <SGLClockIcon />
        <SGLTypography variant="smallText">{time.slice(0, 5)}</SGLTypography>
      </div>
      <SGLTypography variant="smallText">{DOT}</SGLTypography>
      <SGLTypography variant="smallText">{t('appointment.duration.twoHours')}</SGLTypography>
    </div>
  )
}
