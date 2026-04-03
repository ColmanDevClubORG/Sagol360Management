import { useState } from 'react'
import dayjs from 'dayjs'
import { SGLCalendar } from '../../components/UI/Calendar/SGLCalendar'

export const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs())

  return <SGLCalendar selectedDate={selectedDate} onDateChange={setSelectedDate} />
}
