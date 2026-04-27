import { DOT } from '@/constants'
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
    selectedSlot?.date === slot.date &&
    selectedSlot.time === slot.time &&
    selectedSlot.chamber === slot.chamber

  return (
    <div style={styles.slotList}>
      {slots.map((slot) => {
        const [, month, day] = slot.date.split('-')
        const date = `${day}/${month}`
        const time = slot.time.slice(0, 5)

        return (
          <div
            key={`${slot.date}-${slot.time}-${slot.chamber}`}
            style={{
              ...styles.slotCard,
              ...(isSelected(slot) && styles.slotCardSelected),
            }}
            onClick={() => onSelect(slot)}
          >
            <SGLTypography variant="smallTitle">{`${time} ${DOT} ${date}`}</SGLTypography>

            <SGLTypography variant="mediumText">{t(slot.chamber)}</SGLTypography>

            <SGLTypography variant="mediumText" styles={styles.availableSpots}>
              {t('appointment.availableSpots', { count: slot.availableSpots })}
            </SGLTypography>
          </div>
        )
      })}
    </div>
  )
}
