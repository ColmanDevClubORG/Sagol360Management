import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { SwipeableDrawer } from '@mui/material'
import { AppointmentDetails } from './AppointmentDetails'
import { TimePreferencePicker } from './TimePreferencePicker'
import { SlotSelection, type Slot } from './SlotSelection'
import type { Appointment, RescheduleFormValues } from './types'
import * as styles from './styles'

interface BottomSheetDialogProps {
  appointment?: Appointment
  isOpen: boolean
  onClose: () => void
}

const Step = {
  DETAILS: 'DETAILS',
  TIME_PREFERENCE: 'TIME_PREFERENCE',
  SLOT_SELECTION: 'SLOT_SELECTION',
}

type Step = (typeof Step)[keyof typeof Step]

export const BottomSheetDialog = ({ appointment, isOpen, onClose }: BottomSheetDialogProps) => {
  const [step, setStep] = useState<Step>(Step.DETAILS)
  const methods = useForm<RescheduleFormValues>()

  // TODO: Replace with API call
  const slots: Slot[] = [
    {
      date: '2026-04-04',
      time: '15:00:00',
      chamber: 'appointment.chamber.hyperbaric',
      availableSpots: 8,
    },
    {
      date: '2026-04-04',
      time: '17:30:00',
      chamber: 'appointment.chamber.hyperbaric',
      availableSpots: 11,
    },
    {
      date: '2026-04-04',
      time: '20:00:00',
      chamber: 'appointment.chamber.hyperbaric',
      availableSpots: 13,
    },
    {
      date: '2026-04-20',
      time: '13:00:00',
      chamber: 'appointment.chamber.hyperbaric',
      availableSpots: 11,
    },
    {
      date: '2026-05-04',
      time: '17:30:00',
      chamber: 'appointment.chamber.hyperbaric',
      availableSpots: 12,
    },
    {
      date: '2026-05-04',
      time: '20:00:00',
      chamber: 'appointment.chamber.hyperbaric',
      availableSpots: 13,
    },
  ]

  const handleClose = () => {
    setStep(Step.DETAILS)
    methods.reset()
    onClose()
  }

  //TODO: remove this and the _ of the data later
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = async (_data: RescheduleFormValues) => {
    // TODO: Replace with actual API call to reschedule appointment
    handleClose()
  }
  if (!appointment) return null

  const slotProps = { paper: { sx: styles.drawerPaperSx } }

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={isOpen}
      onClose={handleClose}
      onOpen={() => {}}
      slotProps={slotProps}
    >
      <FormProvider {...methods}>
        {step === Step.DETAILS && (
          <AppointmentDetails
            appointment={appointment}
            onChangeDate={() => setStep(Step.TIME_PREFERENCE)}
            onClose={handleClose}
          />
        )}
        {step === Step.TIME_PREFERENCE && (
          <TimePreferencePicker onNext={() => setStep(Step.SLOT_SELECTION)} onClose={handleClose} />
        )}
        {step === Step.SLOT_SELECTION && (
          <SlotSelection
            appointment={appointment}
            slots={slots}
            onBack={() => setStep(Step.TIME_PREFERENCE)}
            onSubmit={methods.handleSubmit(onSubmit)}
            onClose={handleClose}
          />
        )}
      </FormProvider>
    </SwipeableDrawer>
  )
}
