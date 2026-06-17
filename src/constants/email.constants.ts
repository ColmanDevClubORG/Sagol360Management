export const EMAIL_TYPES = {
  ATTENDANCE_UPDATE: 'ATTENDANCE_UPDATE',
} as const

export type EmailType = (typeof EMAIL_TYPES)[keyof typeof EMAIL_TYPES]

export const EMAIL_RECIPIENTS_BY_TYPE = {
  [EMAIL_TYPES.ATTENDANCE_UPDATE]: import.meta.env.VITE_ATTENDANCE_EMAIL || '',
} satisfies Record<EmailType, string>
