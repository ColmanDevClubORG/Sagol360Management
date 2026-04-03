import dayjs from 'dayjs'

export const getStartOfWeek = (date: Date): Date => {
  const currentDate = new Date(date)
  const day = currentDate.getDay()

  const diff = currentDate.getDate() - day

  currentDate.setDate(diff)
  currentDate.setHours(0, 0, 0, 0)

  return currentDate
}

export const getCurrentDay = () => dayjs()
