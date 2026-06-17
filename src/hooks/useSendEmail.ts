import { useMutation } from '@tanstack/react-query'
import { EMAIL_RECIPIENTS_BY_TYPE, type EmailType } from '@/constants/email.constants'
import { sendEmail, type SendEmailResponse } from '@/services/email/email.service'

export const useSendEmail = <TPayload = Record<string, unknown>>(emailType: EmailType) => {
  return useMutation<SendEmailResponse, Error, TPayload>({
    mutationFn: (payload) =>
      sendEmail<TPayload>({
        emailType,
        email: EMAIL_RECIPIENTS_BY_TYPE[emailType],
        payload,
      }),
  })
}
