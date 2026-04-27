import type { Appointment } from '@/components/BottomSheetDialog/types'
import { getAppointmentTimestamp } from '@/utils/appointmentUtils'
import { isSameDay, parseIsoDate } from '@/utils/datesUtils'

export type ScheduleSectionKey = 'today' | 'tomorrow' | 'upcomingWeek'

export const SECTION_LABEL_KEYS: Record<ScheduleSectionKey, string> = {
  today: 'schedule.today',
  tomorrow: 'schedule.tomorrow',
  upcomingWeek: 'schedule.upcomingWeek',
}

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
    date: '2026-04-27',
    chamber: 'appointment.chamber.hyperbaric',
    chairNumber: 9,
    treatmentNumber: 2,
    status: 'pending',
  },
  {
    appointmentId: '2',
    patientId: 1622018,
    time: '15:10:21',
    date: '2026-04-29',
    chamber: 'appointment.chamber.cognitiveAssessment',
    chairNumber: 4,
    treatmentNumber: 3,
    status: 'cancelled',
  },
  {
    appointmentId: '3',
    patientId: 1622019,
    time: '09:05:00',
    date: '2026-05-02',
    chamber: 'appointment.chamber.physiotherapy',
    chairNumber: 2,
    treatmentNumber: 4,
    status: 'confirmed',
  },
  {
    appointmentId: '4',
    patientId: 1622020,
    time: '12:30:00',
    date: '2026-05-03',
    chamber: 'appointment.chamber.stressTest',
    chairNumber: 1,
    treatmentNumber: 5,
    status: 'confirmed',
  },
  {
    appointmentId: '6',
    patientId: 1622022,
    time: '08:15:00',
    date: '2026-04-28',
    chamber: 'appointment.chamber.cognitiveAssessment',
    chairNumber: 3,
    treatmentNumber: 1,
    status: 'confirmed',
  },
  {
    appointmentId: '5',
    patientId: 1622021,
    time: '08:45:00',
    date: '2026-04-26',
    chamber: 'appointment.chamber.imagingInstitute',
    chairNumber: 6,
    treatmentNumber: 6,
    status: 'confirmed',
  },
  {
    appointmentId: '7',
    patientId: 1622022,
    time: '08:15:00',
    date: '2026-04-27',
    chamber: 'appointment.chamber.cognitiveAssessment',
    chairNumber: 3,
    treatmentNumber: 1,
    status: 'confirmed',
  },
  {
    appointmentId: '8',
    patientId: 1622023,
    time: '09:30:00',
    date: '2026-04-27',
    chamber: 'appointment.chamber.red',
    chairNumber: 2,
    treatmentNumber: 2,
    status: 'confirmed',
  },
  {
    appointmentId: '9',
    patientId: 1622024,
    time: '11:00:00',
    date: '2026-04-28',
    chamber: 'appointment.room102',
    chairNumber: 5,
    treatmentNumber: 7,
    status: 'pending',
  },
  {
    appointmentId: '10',
    patientId: 1622025,
    time: '13:20:00',
    date: '2026-04-28',
    chamber: 'appointment.room203',
    chairNumber: 4,
    treatmentNumber: 4,
    status: 'confirmed',
  },
  {
    appointmentId: '11',
    patientId: 1622026,
    time: '10:45:00',
    date: '2026-04-30',
    chamber: 'appointment.orangeCellArizon',
    chairNumber: 8,
    treatmentNumber: 9,
    status: 'confirmed',
  },
  {
    appointmentId: '12',
    patientId: 1622027,
    time: '14:10:00',
    date: '2026-05-01',
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
): Record<ScheduleSectionKey, Appointment[]> => {
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

  return sectionItems
}
