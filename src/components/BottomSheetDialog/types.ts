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
