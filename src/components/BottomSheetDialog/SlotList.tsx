import type { RescheduleFormValues } from './types'
import * as styles from './styles'
import { SGLTypography } from '../UI/Typography/SGLTypography'
import { useTranslation } from 'react-i18next'
import type { Slot } from './SlotSelection'

interface SlotListProps {
  slots: Slot[]
  selectedSlot: RescheduleFormValues['selectedSlot']
  onSelect: (slot: Slot) => void
}

export const SlotList = ({ slots, selectedSlot, onSelect }: SlotListProps) => {
  const { t } = useTranslation()
  const isSelected = (slot: Slot) =>
    selectedSlot?.date === slot.date && selectedSlot?.time === slot.time

  return (
    <div style={styles.slotList}>
      {slots.map((slot) => (
        <div
          key={`${slot.date}-${slot.time}`}
          style={{
            ...styles.slotCard,
            ...(isSelected(slot) && styles.slotCardSelected),
          }}
          onClick={() => onSelect(slot)}
        >
          <SGLTypography variant="smallTitle">
            {slot.time} · {slot.date}
          </SGLTypography>
          <SGLTypography variant="mediumText">{slot.location}</SGLTypography>
          <SGLTypography variant="mediumText" styles={styles.availableSpots}>
            {t('appointment.availableSpots', { count: slot.availableSpots })}
          </SGLTypography>
        </div>
      ))}
    </div>
  )
}
