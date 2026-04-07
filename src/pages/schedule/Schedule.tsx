import { useState } from 'react'
import dayjs from 'dayjs'
import { SGLCalendar } from '../../components/UI/Calendar/SGLCalendar'
import { ScheduleCard } from '@/components/ScheduleCard/ScheduleCard'
import type { Appointment } from '@/components/BottomSheetDialog/types'
import { BottomSheetDialog } from '@/components/BottomSheetDialog/BottomSheetDialog'

const MOK_SCHEDULE_ITEMS: Appointment[] = [
  {
    id: '1',
    title: 'טיפול בתא לחץ',
    time: '10:00',
    durationMinutes: 45,
    location: 'חדר 102',
    type: 'hyperbaric_chamber',
  },
  {
    id: '2',
    title: 'הערכת קוגניטיבית',
    time: '11:00',
    durationMinutes: 60,
    location: 'חדר 203',
    type: 'cognitive_assessment',
  },
]

export const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs())
  const [activeAppointment, setActiveAppointment] = useState<Appointment | undefined>()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
    </div>
  )
}
