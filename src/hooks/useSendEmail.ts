import { useMutation } from '@tanstack/react-query'
import { EMAIL_RECIPIENTS_BY_TYPE } from '@/constants/email.constants'
import { sendEmail } from '@/services/email/email.service'
import type { EmailType, SendEmailResponse } from '@/types/email.types'

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
