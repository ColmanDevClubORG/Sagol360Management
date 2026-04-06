import { useFormContext } from 'react-hook-form'
import type { Appointment, RescheduleFormValues } from './types'
import * as styles from './styles'
import { SlotSelectionHeader } from './SlotSelectionHeader'
import { SlotLocationText } from './SlotLocationText'
import { SlotList } from './SlotList'
import { SlotActions } from './SlotActions'

export interface Slot {
  date: string
  time: string
  location: string
  availableSpots: number
}

interface SlotSelectionProps {
  appointment: Appointment
  slots: Slot[]
  onBack: () => void
  onSubmit: () => void
  onClose: () => void
}

export const SlotSelection = ({
  appointment,
  slots,
  onBack,
  onSubmit,
  onClose,
}: SlotSelectionProps) => {
  const { setValue, watch } = useFormContext<RescheduleFormValues>()
  const selectedSlot = watch('selectedSlot')

  const handleSelectSlot = (slot: Slot) => {
    setValue('selectedSlot', {
      date: slot.date,
      time: slot.time,
      location: slot.location,
    })
  }

  return (
    <div style={styles.container}>
      <SlotSelectionHeader onClose={onClose} />
      <SlotLocationText location={appointment.location} />
      <SlotList slots={slots} selectedSlot={selectedSlot} onSelect={handleSelectSlot} />
      <SlotActions onBack={onBack} onSubmit={onSubmit} selectedSlot={selectedSlot} />
    </div>
  )
}
