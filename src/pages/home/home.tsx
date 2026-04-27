import { useState } from 'react'
import { ProgressCard } from '@/pages/home/progress/ProgressCard'
import { BottomSheetDialog } from '@/components/BottomSheetDialog/BottomSheetDialog'
import type { Appointment } from '@/components/BottomSheetDialog/types'
import { TrainingGoal } from '../lifeStyle/physioAndTrainingTab/TraningGoal'
import { DailyTips } from './dailyTips/DailyTips'
import { CheckIn } from './checkIn/CheckIn'

export const Home = () => {
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | undefined>({
    appointmentId: '1',
    patientId: 1622017,
    time: '10:12:50',
    date: '2026-05-15',
    chamber: 'appointment.chamber.hyperbaric',
    chairNumber: 9,
    treatmentNumber: 2,
    status: 'confirmed',
  })
  return (
    <>
      <ProgressCard value={10} />
      <BottomSheetDialog
        appointment={selectedAppointment}
        isOpen={!!selectedAppointment}
        onClose={() => setSelectedAppointment(undefined)}
      />
      <TrainingGoal />
      <DailyTips />
      <CheckIn onDone={() => {}} />
    </>
  )
}
