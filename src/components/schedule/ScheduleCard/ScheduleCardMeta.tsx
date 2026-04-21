import { SGLClockIcon } from '@/components/UI/Icons/ClockIcon/SGLClockIcon'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import type { ScheduleCardMetaProps } from './types'
import { formatDuration } from '../../BottomSheetDialog/utils'
import { DOT } from '@/constants'
import { scheduleCardStyles } from './scheduleCardStyles'
import { formatTime } from '@/utils/datesUtils'

export const ScheduleCardMeta = ({ startAt, durationMinutes }: ScheduleCardMetaProps) => {
  return (
    <div style={scheduleCardStyles.meta}>
      <div style={scheduleCardStyles.timeRow}>
        <SGLClockIcon />
        <SGLTypography variant="smallText">{formatTime(startAt)}</SGLTypography>
      </div>
      <SGLTypography variant="smallText">{DOT}</SGLTypography>
      <SGLTypography variant="smallText">{formatDuration(durationMinutes)}</SGLTypography>
    </div>
  )
}
