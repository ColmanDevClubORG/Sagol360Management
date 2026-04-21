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

export const formatDate = (startAt: string) => {
  const date = dayjs(startAt)
  return date.isValid() ? date.format('DD/MM') : ''
}

export const formatTime = (startAt: string) => {
  const date = dayjs(startAt)
  return date.isValid() ? date.format('HH:mm') : ''
}
