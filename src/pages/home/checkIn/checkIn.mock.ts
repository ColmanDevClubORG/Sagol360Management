import type { AttendanceAppointmentDetails } from '@/types/attendance.types'

export const mockAttendanceAppointmentDetails = {
  patientName: 'ישראל ישראלי',
  patientNumber: '123456',
  time: '18:00',
  cell: 'כתום',
  building: 'אריסון',
} satisfies AttendanceAppointmentDetails
