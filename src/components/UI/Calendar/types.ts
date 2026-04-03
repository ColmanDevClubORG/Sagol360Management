import { type Dayjs } from 'dayjs'

export type SGLCalendarProps = {
  selectedDate: Dayjs
  onDateChange: (date: Dayjs) => void
  weekDate?: Dayjs
}
