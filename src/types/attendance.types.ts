import type { ATTENDANCE_STATUS } from '@/constants/attendance.constants'

export type AttendanceStatus = (typeof ATTENDANCE_STATUS)[keyof typeof ATTENDANCE_STATUS]

export interface AttendanceAppointmentDetails {
  patientName: string
  patientNumber: string
  time: string
  cell: string
  building: string
}

export interface AttendanceUpdatePayload extends AttendanceAppointmentDetails {
  attendanceStatus: AttendanceStatus
}
