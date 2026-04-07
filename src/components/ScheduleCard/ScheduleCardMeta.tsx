import { SGLClockIcon } from '@/components/UI/Icons/ClockIcon/SGLClockIcon'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { scheduleCardStyles } from './styles'
import type { ScheduleCardMetaProps } from './types'
import { formatDuration } from '../BottomSheetDialog/utils'
import { SCHEDULE_CONSTANTS } from '../../pages/schedule/constants'

export const ScheduleCardMeta = ({ time, durationMinutes }: ScheduleCardMetaProps) => {
  return (
    <div style={scheduleCardStyles.meta}>
      <div style={scheduleCardStyles.timeRow}>
        <SGLClockIcon />
        <SGLTypography variant="smallText">{time}</SGLTypography>
      </div>
      <SGLTypography variant="smallText">{SCHEDULE_CONSTANTS.DOT}</SGLTypography>
      <SGLTypography variant="smallText">{formatDuration(durationMinutes)}</SGLTypography>
    </div>
  )
}
