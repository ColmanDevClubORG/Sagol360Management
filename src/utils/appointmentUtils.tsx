import type { Appointment } from '@/components/BottomSheetDialog/types'
import { parseIsoDate } from '@/utils/datesUtils'

const APPOINTMENT_TITLE_BY_CHAMBER: Record<string, string> = {
  'appointment.chamber.red': 'appointment.title.cognitiveAssessment',
  'appointment.chamber.cognitiveAssessment': 'appointment.title.cognitiveAssessment',
  'appointment.chamber.physiotherapy': 'appointment.title.physiotherapy',
  'appointment.chamber.hyperbaric': 'appointment.title.hyperbaricTreatment',
  'appointment.chamber.stressTest': 'appointment.title.stressTest',
  'appointment.chamber.imagingInstitute': 'appointment.title.mriImaging',
  'appointment.room102': 'appointment.title.hyperbaricTreatment',
  'appointment.room203': 'appointment.title.cognitiveAssessment',
  'appointment.orangeCellArizon': 'appointment.title.hyperbaricTreatment',
  'orange.cell': 'appointment.title.hyperbaricTreatment',
}

export const getAppointmentTitleKey = (chamber: string) =>
  APPOINTMENT_TITLE_BY_CHAMBER[chamber] ?? 'appointment.title.default'

export const getAppointmentTimestamp = ({ date, time }: Appointment) => {
  const parsedDate = parseIsoDate(date)

  if (!parsedDate) {
    return Number.MAX_SAFE_INTEGER
  }

  const [hours = 0, minutes = 0, seconds = 0] = time.split(':').map(Number)
  parsedDate.setHours(hours, minutes, seconds, 0)

  return parsedDate.getTime()
}
