import type { Appointment } from '@/components/BottomSheetDialog/types'
import { getAppointmentTimestamp } from '@/utils/appointmentUtils'
import { addDays, formatIsoDate, isSameDay, parseIsoDate } from '@/utils/datesUtils'

export type ScheduleSectionKey = 'today' | 'tomorrow' | 'upcomingWeek'

interface ScheduleSectionDefinition {
  key: ScheduleSectionKey
  labelKey: string
}

export interface ScheduleSectionItems extends ScheduleSectionDefinition {
  items: Appointment[]
}

const SCHEDULE_SECTION_DEFINITIONS: ScheduleSectionDefinition[] = [
  { key: 'today', labelKey: 'schedule.today' },
  { key: 'tomorrow', labelKey: 'schedule.tomorrow' },
  { key: 'upcomingWeek', labelKey: 'schedule.upcomingWeek' },
]

export const SCHEDULE_SECTION_KEYS = {
  today: 'today',
  tomorrow: 'tomorrow',
  upcomingWeek: 'upcomingWeek',
} as const

const getMockScheduleDate = (daysFromToday: number) =>
  formatIsoDate(addDays(new Date(), daysFromToday))

export const getSection = (
  appointmentDate: string,
  todayStart: Date,
  tomorrowStart: Date,
  dayAfterTomorrowStart: Date,
  nextWeekEnd: Date,
): ScheduleSectionKey | null => {
  const parsedDate = parseIsoDate(appointmentDate)

  if (!parsedDate) {
    return null
  }

  if (isSameDay(parsedDate, todayStart)) {
    return 'today'
  }

  if (isSameDay(parsedDate, tomorrowStart)) {
    return 'tomorrow'
  }

  if (parsedDate >= dayAfterTomorrowStart && parsedDate <= nextWeekEnd) {
    return 'upcomingWeek'
  }

  return null
}

export const MOCK_SCHEDULE_ITEMS: Appointment[] = [
  {
    appointmentId: '1',
    patientId: 1622017,
    time: '10:12:50',
    date: getMockScheduleDate(0),
    chamber: 'appointment.chamber.hyperbaric',
    chairNumber: 9,
    treatmentNumber: 2,
    status: 'pending',
  },
  {
    appointmentId: '2',
    patientId: 1622018,
    time: '15:10:21',
    date: getMockScheduleDate(2),
    chamber: 'appointment.chamber.cognitiveAssessment',
    chairNumber: 4,
    treatmentNumber: 3,
    status: 'cancelled',
  },
  {
    appointmentId: '3',
    patientId: 1622019,
    time: '09:05:00',
    date: getMockScheduleDate(5),
    chamber: 'appointment.chamber.physiotherapy',
    chairNumber: 2,
    treatmentNumber: 4,
    status: 'confirmed',
  },
  {
    appointmentId: '4',
    patientId: 1622020,
    time: '12:30:00',
    date: getMockScheduleDate(6),
    chamber: 'appointment.chamber.stressTest',
    chairNumber: 1,
    treatmentNumber: 5,
    status: 'confirmed',
  },
  {
    appointmentId: '6',
    patientId: 1622022,
    time: '08:15:00',
    date: getMockScheduleDate(1),
    chamber: 'appointment.chamber.cognitiveAssessment',
    chairNumber: 3,
    treatmentNumber: 1,
    status: 'confirmed',
  },
  {
    appointmentId: '5',
    patientId: 1622021,
    time: '08:45:00',
    date: getMockScheduleDate(4),
    chamber: 'appointment.chamber.imagingInstitute',
    chairNumber: 6,
    treatmentNumber: 6,
    status: 'confirmed',
  },
  {
    appointmentId: '7',
    patientId: 1622022,
    time: '08:15:00',
    date: getMockScheduleDate(0),
    chamber: 'appointment.chamber.cognitiveAssessment',
    chairNumber: 3,
    treatmentNumber: 1,
    status: 'confirmed',
  },
  {
    appointmentId: '8',
    patientId: 1622023,
    time: '09:30:00',
    date: getMockScheduleDate(0),
    chamber: 'appointment.chamber.red',
    chairNumber: 2,
    treatmentNumber: 2,
    status: 'confirmed',
  },
  {
    appointmentId: '9',
    patientId: 1622024,
    time: '11:00:00',
    date: getMockScheduleDate(1),
    chamber: 'appointment.room102',
    chairNumber: 5,
    treatmentNumber: 7,
    status: 'pending',
  },
  {
    appointmentId: '10',
    patientId: 1622025,
    time: '13:20:00',
    date: getMockScheduleDate(1),
    chamber: 'appointment.room203',
    chairNumber: 4,
    treatmentNumber: 4,
    status: 'confirmed',
  },
  {
    appointmentId: '11',
    patientId: 1622026,
    time: '10:45:00',
    date: getMockScheduleDate(3),
    chamber: 'appointment.orangeCellArizon',
    chairNumber: 8,
    treatmentNumber: 9,
    status: 'confirmed',
  },
  {
    appointmentId: '12',
    patientId: 1622027,
    time: '14:10:00',
    date: getMockScheduleDate(4),
    chamber: 'orange.cell',
    chairNumber: 10,
    treatmentNumber: 11,
    status: 'cancelled',
  },
] //TODO should come from db
export const buildSectionItems = (
  appointments: Appointment[],
  todayStart: Date,
  tomorrowStart: Date,
  dayAfterTomorrowStart: Date,
  nextWeekEnd: Date,
): ScheduleSectionItems[] => {
  const sectionItems: Record<ScheduleSectionKey, Appointment[]> = {
    today: [],
    tomorrow: [],
    upcomingWeek: [],
  }

  const sortedAppointments = [...appointments].sort((a, b) => {
    return getAppointmentTimestamp(a) - getAppointmentTimestamp(b)
  })

  for (const item of sortedAppointments) {
    const section = getSection(
      item.date,
      todayStart,
      tomorrowStart,
      dayAfterTomorrowStart,
      nextWeekEnd,
    )

    if (section) {
      sectionItems[section].push(item)
    }
  }

  return SCHEDULE_SECTION_DEFINITIONS.map(({ key, labelKey }) => ({
    key,
    labelKey,
    items: sectionItems[key],
  }))
}
