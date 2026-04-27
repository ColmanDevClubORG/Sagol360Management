import dayjs from 'dayjs'

export const ISO_DATE_REGEX = /^(\d{4})-(\d{2})-(\d{2})$/

export const getStartOfWeek = (date: Date): Date => {
  const currentDate = new Date(date)
  const day = currentDate.getDay()

  const diff = currentDate.getDate() - day

  currentDate.setDate(diff)
  currentDate.setHours(0, 0, 0, 0)

  return currentDate
}
export const getScheduleDateRange = (date: Date) => {
  const todayStart = getStartOfDay(date)
  const tomorrowStart = addDays(todayStart, 1)
  const dayAfterTomorrowStart = addDays(todayStart, 2)
  const nextWeekEnd = addDays(todayStart, 7)
  nextWeekEnd.setHours(23, 59, 59, 999)

  return {
    todayStart,
    tomorrowStart,
    dayAfterTomorrowStart,
    nextWeekEnd,
  }
}
export const getCurrentDay = () => dayjs()
export const getStartOfDay = (date: Date) => {
  const startOfDay = new Date(date)
  startOfDay.setHours(0, 0, 0, 0)
  return startOfDay
}

export const addDays = (date: Date, days: number) => {
  const nextDate = new Date(date)
  nextDate.setDate(nextDate.getDate() + days)
  return nextDate
}
export const padTwo = (value: number) => value.toString().padStart(2, '0')

export const formatDisplayDate = (date: Date) =>
  `${padTwo(date.getDate())}/${padTwo(date.getMonth() + 1)}/${date.getFullYear()}`

export const formatDisplayTime = (date: Date) =>
  `${padTwo(date.getHours())}:${padTwo(date.getMinutes())}`

export const isSameDay = (date: Date, targetDate: Date) =>
  date.getFullYear() === targetDate.getFullYear() &&
  date.getMonth() === targetDate.getMonth() &&
  date.getDate() === targetDate.getDate()

export const parseIsoDate = (date: string): Date | null => {
  const dateParts = ISO_DATE_REGEX.exec(date)

  if (!dateParts) {
    return null
  }

  const [, year, month, day] = dateParts
  const fullYear = Number(year)
  const monthNumber = Number(month)
  const dayNumber = Number(day)
  const parsedDate = new Date(fullYear, monthNumber - 1, dayNumber)

  if (
    parsedDate.getFullYear() !== fullYear ||
    parsedDate.getMonth() !== monthNumber - 1 ||
    parsedDate.getDate() !== dayNumber
  ) {
    return null
  }

  return parsedDate
}
