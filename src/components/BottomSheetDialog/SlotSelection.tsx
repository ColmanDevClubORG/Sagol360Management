import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useFormContext } from 'react-hook-form'
import type { Appointment, RescheduleFormValues } from './types'
import * as styles from './styles'
import { SGLTypography } from '../UI/Typography/SGLTypography'
import { SGLButton } from '../UI/Button/SGLButton'
import { useTranslation } from 'react-i18next'

interface Slot {
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
  const { t } = useTranslation()
  const { setValue, watch } = useFormContext<RescheduleFormValues>()
  const selectedSlot = watch('selectedSlot')

  const handleSelectSlot = (slot: Slot) => {
    setValue('selectedSlot', {
      date: slot.date,
      time: slot.time,
      location: slot.location,
    })
  }

  const isSelected = (slot: Slot) =>
    selectedSlot?.date === slot.date && selectedSlot?.time === slot.time

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <SGLTypography variant="largeTitle">{t('appointment.chooseNewDate')}</SGLTypography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </div>

      <SGLTypography variant="mediumText">
        {t('appointment.showingSlots', { location: appointment.location })}
      </SGLTypography>

      <div style={styles.slotList}>
        {slots.map((slot) => (
          <div
            key={`${slot.date}-${slot.time}`}
            style={{
              ...styles.slotCard,
              ...(isSelected(slot) ? styles.slotCardSelected : {}),
            }}
            onClick={() => handleSelectSlot(slot)}
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

      <div style={styles.actions}>
        <SGLButton variant="outlined" onClick={onBack} fullWidth>
          <SGLTypography variant="smallTitle">{t('appointment.back')}</SGLTypography>
        </SGLButton>
        <SGLButton variant="contained" onClick={onSubmit} fullWidth disabled={!selectedSlot}>
          <SGLTypography variant="smallTitle" color="white">
            {t('appointment.sendRequest')}
          </SGLTypography>
        </SGLButton>
      </div>
    </div>
  )
}
