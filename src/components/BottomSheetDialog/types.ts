import { theme } from '@/theme'

export type AppointmentStatus = 'confirmed' | 'pending' | 'cancelled'
export type AppointmentDate =
  `${number}${number}${number}${number}-${number}${number}-${number}${number}`

export interface Appointment {
  appointmentId: string
  patientId: number
  time: string
  date: AppointmentDate
  chamber: string
  chairNumber: number
  treatmentNumber: number
  status: AppointmentStatus
}

export const appointmentStatusColors: Record<AppointmentStatus, string> = {
  confirmed: theme.palette.purple.main,
  pending: theme.palette.orange.main,
  cancelled: theme.palette.error.main,
}

export const appointmentChamberColors: Record<string, string> = {
  'appointment.chamber.hyperbaric': theme.palette.purple.main,
  'appointment.chamber.cognitiveAssessment': theme.palette.blue.main,
  'appointment.chamber.physiotherapy': theme.palette.emerald.main,
  'appointment.chamber.stressTest': theme.palette.orange.main,
  'appointment.chamber.imagingInstitute': theme.palette.green.main,
  'appointment.chamber.red': theme.palette.error.main,
  'appointment.room102': theme.palette.brown.main,
  'appointment.room203': theme.palette.secondary.main,
  'appointment.orangeCellArizon': theme.palette.warmBrown.main,
  'orange.cell': theme.palette.yellow.main,
}

export const getAppointmentChamberColor = (chamber: string) =>
  appointmentChamberColors[chamber] ?? theme.palette.midGrey.main

export const FormFields = {
  SelectedSlot: 'selectedSlot',
}

export interface RescheduleFormValues {
  timePreference: 'morning' | 'afternoon_evening'
  selectedSlot: {
    date: AppointmentDate
    time: string
    chamber: string
  }
}
