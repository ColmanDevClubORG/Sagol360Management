import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { SwipeableDrawer } from '@mui/material'
import { AppointmentDetails } from './AppointmentDetails'
import { TimePreferencePicker } from './TimePreferencePicker'
import { SlotSelection } from './SlotSelection'
import type { Appointment, RescheduleFormValues } from './types'
import * as styles from './styles'

interface BottomSheetDialogProps {
  appointment: Appointment | null
  open: boolean
  onClose: () => void
}

// TODO: Replace with API call
const slots = [
  { date: '04/04', time: '15:00', location: 'תא כתום', availableSpots: 8 },
  { date: '04/04', time: '17:30', location: 'תא כתום', availableSpots: 11 },
  { date: '04/04', time: '20:00', location: 'תא כתום', availableSpots: 13 },
  { date: '05/04', time: '15:00', location: 'תא כתום', availableSpots: 11 },
  { date: '05/04', time: '17:30', location: 'תא כתום', availableSpots: 12 },
  { date: '05/04', time: '20:00', location: 'תא כתום', availableSpots: 13 },
]

export const BottomSheetDialog = ({ appointment, open, onClose }: BottomSheetDialogProps) => {
  const [step, setStep] = useState(0)
  const methods = useForm<RescheduleFormValues>()

  const handleClose = () => {
    setStep(0)
    methods.reset()
    onClose()
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (_data: RescheduleFormValues) => {
    // TODO: Replace with actual API call to reschedule appointment
    handleClose()
  }
  if (!appointment) return null

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={handleClose}
      onOpen={() => {}}
      slotProps={{ paper: { sx: styles.drawerPaperSx } }}
    >
      <FormProvider {...methods}>
        {step === 0 && (
          <AppointmentDetails
            appointment={appointment}
            onChangeDate={() => setStep(1)}
            onClose={handleClose}
          />
        )}
        {step === 1 && <TimePreferencePicker onNext={() => setStep(2)} onClose={handleClose} />}
        {step === 2 && (
          <SlotSelection
            appointment={appointment}
            slots={slots} // from API hook
            onBack={() => setStep(1)}
            onSubmit={methods.handleSubmit(onSubmit)}
            onClose={handleClose}
          />
        )}
      </FormProvider>
    </SwipeableDrawer>
  )
}
