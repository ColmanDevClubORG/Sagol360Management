import { useState } from 'react'
import dayjs from 'dayjs'
import { SGLCalendar } from '../../components/UI/Calendar/SGLCalendar'
import { ScheduleCard } from '@/components/ScheduleCard/ScheduleCard'

const MOK_SCHEDULE_ITEMS = [
  {
    title: 'הערכה קוגניטיבית',
    time: '10:00',
    duration: "45 דק'",
    location: 'חדר 102',
  },
  {
    title: 'פיזיותרפיה',
    time: '11:30',
    duration: "30 דק'",
    location: 'מכון פיזיותרפיה',
    borderColor: '#22c55e',
  },
] //TODO should come from DB

export const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs())

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <SGLCalendar selectedDate={selectedDate} onDateChange={setSelectedDate} />
      {MOK_SCHEDULE_ITEMS.map((item) => (
        <ScheduleCard key={`${item.location}-${item.time}`} {...item} />
      ))}
    </div>
  )
}
