import { useState } from 'react'
import dayjs from 'dayjs'
import { SGLCalendar } from '../../components/UI/Calendar/SGLCalendar'
import { ScheduleCard } from '@/components/ScheduleCard/ScheduleCard'
import type { Appointment } from '@/components/BottomSheetDialog/types'
import { BottomSheetDialog } from '@/components/BottomSheetDialog/BottomSheetDialog'
import { SGLContainer } from '@/components/UI/Container/SGLContainer'
import { scheduleStyles } from './styles'
import { useTranslation } from 'react-i18next'

export const Schedule = () => {
  const { t } = useTranslation()
  const [selectedDate, setSelectedDate] = useState(dayjs())
  const [activeAppointment, setActiveAppointment] = useState<Appointment | undefined>()

  const MOK_SCHEDULE_ITEMS: Appointment[] = [
    {
      id: '1',
      title: t('progress.treatment'),
      time: '10:00',
      durationMinutes: 45,
      location: t('appointment.room102'),
      type: 'hyperbaric_chamber',
    },
    {
      id: '2',
      title: t('appointment.cognitiveAssessment'),
      time: '11:00',
      durationMinutes: 60,
      location: t('appointment.room203'),
      type: 'cognitive_assessment',
    },
  ]

  return (
    <SGLContainer styles={{ ...scheduleStyles.container }}>
      <SGLCalendar selectedDate={selectedDate} onDateChange={setSelectedDate} />

      {MOK_SCHEDULE_ITEMS.map((item) => (
        <ScheduleCard key={item.id} {...item} onClick={() => setActiveAppointment(item)} />
      ))}

      {activeAppointment && (
        <BottomSheetDialog
          isOpen={!!activeAppointment}
          appointment={activeAppointment}
          onClose={() => setActiveAppointment(undefined)}
        />
      )}
    </SGLContainer>
  )
}
