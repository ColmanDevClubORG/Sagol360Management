export const ATTENDANCE_STATUS = {
  COMING: 'COMING',
  NOT_COMING: 'NOT_COMING',
} as const

export type AttendanceStatus = (typeof ATTENDANCE_STATUS)[keyof typeof ATTENDANCE_STATUS]

export const ATTENDANCE_APPOINTMENT_DETAILS = {
  patientName: 'ישראל ישראלי',
  patientNumber: '123456',
  time: '18:00',
  cell: 'כתום',
  building: 'אריסון',
} as const
