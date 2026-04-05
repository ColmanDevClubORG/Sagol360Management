import { SGLClockIcon } from '@/components/UI/Icons/ClockIcon/SGLClockIcon'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { scheduleCardStyles } from './styles'
import type { ScheduleCardMetaProps } from './types'
import { useTranslation } from 'react-i18next'

export const ScheduleCardMeta = ({ time, duration }: ScheduleCardMetaProps) => {
  const { t } = useTranslation()
  return (
    <div style={scheduleCardStyles.meta}>
      <div style={scheduleCardStyles.timeRow}>
        <SGLClockIcon />
        <SGLTypography variant="smallText">{time}</SGLTypography>
      </div>
      <SGLTypography variant="smallText">•</SGLTypography>
      <SGLTypography variant="smallText">{t(duration)}</SGLTypography>
    </div>
  )
}
