import { useState } from 'react'
import { ProgressCard } from '@/pages/home/progress/ProgressCard'
import { BottomSheetDialog } from '@/components/BottomSheetDialog/BottomSheetDialog'
import type { Appointment } from '@/components/BottomSheetDialog/types'
import { TrainingGoal } from '../lifeStyle/physioAndTrainingTab/TraningGoal'
import { DailyTips } from './dailyTips/DailyTips'
import { useTranslation } from 'react-i18next'
import { CheckIn } from './checkIn/CheckIn'
import { SGLVideoCard } from '@/components/UI/Video/SGLVideoCard'

export const Home = () => {
  const { t } = useTranslation()
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | undefined>({
    id: '1',
    title: t('progress.treatment'),
    time: '00:07',
    durationMinutes: 120,
    location: t('appointment.orangeCellArizon'),
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
      <SGLVideoCard
        title={t('balanceTraining.title')}
        description={t('balanceTraining.description')}
        durationMinutes={10}
      />
    </>
  )
}
