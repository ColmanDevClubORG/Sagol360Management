import type { EMAIL_TYPES } from '@/constants/email.constants'

export type EmailType = (typeof EMAIL_TYPES)[keyof typeof EMAIL_TYPES]

export interface SendEmailRequest<TPayload = Record<string, unknown>> {
  emailType: EmailType
  email: string
  payload: TPayload
}

export interface SendEmailResponse {
  message: string
}
