import { useFormContext } from 'react-hook-form'
import type { Appointment, AppointmentDate, RescheduleFormValues } from './types'
import * as styles from './styles'
import { SlotSelectionHeader } from './SlotSelectionHeader'
import { SlotLocationText } from './SlotLocationText'
import { SlotList } from './SlotList'
import { SlotActions } from './SlotActions'

export interface Slot {
  date: AppointmentDate
  time: string
  chamber: string
  availableSpots: number
}

interface SlotSelectionProps {
  appointment: Appointment
  slots: Slot[]
  onBack: () => void
  onSubmit: () => void
  onClose: () => void
}

export const SlotSelection = ({ appointment, slots, onBack, onSubmit }: SlotSelectionProps) => {
  const { setValue, watch } = useFormContext<RescheduleFormValues>()
  const selectedSlot = watch('selectedSlot')

  const handleSelectSlot = (slot: Slot) => {
    setValue('selectedSlot', {
      date: slot.date,
      time: slot.time,
      chamber: slot.chamber,
    })
  }
  return (
    <div style={styles.container}>
      <SlotSelectionHeader />
      <SlotLocationText chamber={appointment.chamber} />
      <SlotList slots={slots} selectedSlot={selectedSlot} onSelect={handleSelectSlot} />
      <SlotActions onBack={onBack} onSubmit={onSubmit} selectedSlot={selectedSlot} />
    </div>
  )
}
