export const EMAIL_TYPES = {
  ATTENDANCE_UPDATE: 'ATTENDANCE_UPDATE',
} as const

export const EMAIL_RECIPIENTS_BY_TYPE = {
  [EMAIL_TYPES.ATTENDANCE_UPDATE]: import.meta.env.VITE_ATTENDANCE_EMAIL || '',
} satisfies Record<(typeof EMAIL_TYPES)[keyof typeof EMAIL_TYPES], string>
