import { DOT } from '@/constants'
import type { RescheduleFormValues } from './types'
import * as styles from './styles'
import { SGLTypography } from '../UI/Typography/SGLTypography'
import { useTranslation } from 'react-i18next'
import type { Slot } from './SlotSelection'
import { formatDisplayTime, formatShortDisplayDate } from '@/utils/datesUtils'

interface SlotListProps {
  slots: Slot[]
  selectedSlot?: RescheduleFormValues['selectedSlot']
  onSelect: (slot: Slot) => void
}

export const SlotList = ({ slots, selectedSlot, onSelect }: SlotListProps) => {
  const { t } = useTranslation()
  const { date: selectedDate, time: selectedTime, chamber: selectedChamber } = selectedSlot ?? {}

  const isSelected = ({ date, time, chamber }: Slot) =>
    selectedDate === date && selectedTime === time && selectedChamber === chamber

  return (
    <div style={styles.slotList}>
      {slots.map((slot) => {
        const date = formatShortDisplayDate(slot.date)
        const time = formatDisplayTime(slot.time)

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
