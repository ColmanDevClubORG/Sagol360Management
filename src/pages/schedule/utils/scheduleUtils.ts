import dayjs, { type Dayjs } from 'dayjs'
import type { Appointment } from '@/components/BottomSheetDialog/types'

export type ScheduleSectionKey = 'today' | 'tomorrow' | 'upcomingWeek'

export const SECTION_LABEL_KEYS: Record<ScheduleSectionKey, string> = {
  today: 'schedule.today',
  tomorrow: 'schedule.tomorrow',
  upcomingWeek: 'schedule.upcomingWeek',
}

export const getSection = (
  startAt: string,
  todayStart: Dayjs,
  tomorrowStart: Dayjs,
  dayAfterTomorrowStart: Dayjs,
  nextWeekEnd: Dayjs,
): ScheduleSectionKey | null => {
  const parsedDate = dayjs(startAt)

  if (parsedDate.isSame(todayStart, 'day')) {
    return 'today'
  }

  if (parsedDate.isSame(tomorrowStart, 'day')) {
    return 'tomorrow'
  }

  if (!parsedDate.isBefore(dayAfterTomorrowStart) && !parsedDate.isAfter(nextWeekEnd)) {
    return 'upcomingWeek'
  }

  return null
}

export const MOCK_SCHEDULE_ITEMS: Appointment[] = [
  {
    id: '1',
    title: 'progress.treatment',
    startAt: '2026-04-21T10:12:50',
    durationMinutes: 45,
    location: 'appointment.room102',
    type: 'hyperbaric_chamber',
  },
  {
    id: '2',
    title: 'appointment.cognitiveAssessment',
    startAt: '2026-04-22T11:00:00',
    durationMinutes: 60,
    location: 'appointment.room203',
    type: 'cognitive_assessment',
  },
  {
    id: '3',
    title: 'progress.treatment',
    startAt: '2026-04-28T09:30:00',
    durationMinutes: 30,
    location: 'appointment.room102',
    type: 'hyperbaric_chamber',
  },
] //TODO should come from db
export const buildSectionItems = (
  appointments: Appointment[],
  todayStart: Dayjs,
  tomorrowStart: Dayjs,
  dayAfterTomorrowStart: Dayjs,
  nextWeekEnd: Dayjs,
): Record<ScheduleSectionKey, Appointment[]> => {
  const sectionItems: Record<ScheduleSectionKey, Appointment[]> = {
    today: [],
    tomorrow: [],
    upcomingWeek: [],
  }

  const sortedAppointments = [...appointments].sort((a, b) => {
    return dayjs(a.startAt).valueOf() - dayjs(b.startAt).valueOf()
  })

  for (const item of sortedAppointments) {
    const section = getSection(
      item.startAt,
      todayStart,
      tomorrowStart,
      dayAfterTomorrowStart,
      nextWeekEnd,
    )

    if (section) {
      sectionItems[section].push(item)
    }
  }

  return sectionItems
}
