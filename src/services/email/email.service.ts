import { API_ENDPOINTS } from '@/constants/api.constants'
import { apiService } from '@/services/api/api.service'
import type { SendEmailRequest, SendEmailResponse } from '@/types/email.types'

export const sendEmail = <TPayload = Record<string, unknown>>(data: SendEmailRequest<TPayload>) => {
  return apiService.post<SendEmailResponse, SendEmailRequest<TPayload>>(API_ENDPOINTS.email, data)
}
