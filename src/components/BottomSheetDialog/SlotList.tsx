import type { RescheduleFormValues } from './types'
import * as styles from './styles'
import { SGLTypography } from '../UI/Typography/SGLTypography'
import { useTranslation } from 'react-i18next'
import type { Slot } from './SlotSelection'
import { formatDate, formatTime } from '@/utils/datesUtils'

interface SlotListProps {
  slots: Slot[]
  selectedSlot: RescheduleFormValues['selectedSlot']
  onSelect: (slot: Slot) => void
}

export const SlotList = ({ slots, selectedSlot, onSelect }: SlotListProps) => {
  const { t } = useTranslation()

  const isSelected = (slot: Slot) => selectedSlot?.startAt === slot.startAt

  return (
    <div style={styles.slotList}>
      {slots.map((slot) => {
        const date = formatDate(slot.startAt)
        const time = formatTime(slot.startAt)

        return (
          <div
            key={slot.startAt}
            style={{
              ...styles.slotCard,
              ...(isSelected(slot) && styles.slotCardSelected),
            }}
            onClick={() => onSelect(slot)}
          >
            <SGLTypography variant="smallTitle">
              {time} · {date}
            </SGLTypography>

            <SGLTypography variant="mediumText">{slot.location}</SGLTypography>

            <SGLTypography variant="mediumText" styles={styles.availableSpots}>
              {t('appointment.availableSpots', { count: slot.availableSpots })}
            </SGLTypography>
          </div>
        )
      })}
    </div>
  )
}
