import { useState } from 'react'
import { ProgressCard } from '@/pages/home/progress/ProgressCard'
import { BottomSheetDialog } from '@/components/BottomSheetDialog/BottomSheetDialog'
import type { Appointment } from '@/components/BottomSheetDialog/types'
import { TrainingGoal } from '../lifeStyle/physioAndTrainingTab/TraningGoal'
import { DailyTips } from './dailyTips/DailyTips'
import { CheckIn } from './checkIn/CheckIn'

export const Home = () => {
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | undefined>({
    id: '1',
    title: 'progress.treatment',
    durationMinutes: 120,
    location: 'appointment.orangeCellArizon',
    startAt: '2026-04-21T10:12:00',
    type: 'hyperbaric_chamber',
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
