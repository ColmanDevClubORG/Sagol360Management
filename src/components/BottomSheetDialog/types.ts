import { theme } from '@/theme'

export const APPOINTMENT_TYPES = [
  'hyperbaric_chamber',
  'cognitive_assessment',
  'physiotherapy',
  'stress_test',
  'mri_imaging',
]

export type AppointmentType = (typeof APPOINTMENT_TYPES)[number]

export interface Appointment {
  id: string
  title: string
  time: string
  location: string
  durationMinutes: number
  type: AppointmentType
}

export const appointmentColors: Record<AppointmentType, string> = {
  hyperbaric_chamber: theme.palette.purple.main,
  cognitive_assessment: theme.palette.blue.main,
  physiotherapy: theme.palette.emerald.main,
  stress_test: theme.palette.orange.main,
  mri_imaging: theme.palette.yellow.main,
}

export interface RescheduleFormValues {
  timePreference: 'morning' | 'afternoon_evening'
  selectedSlot: {
    date: string
    time: string
    location: string
  }
}
