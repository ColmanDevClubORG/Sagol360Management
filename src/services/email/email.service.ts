import { API_ENDPOINTS } from '@/constants/api.constants'
import { apiService } from '@/services/api/api.service'

export interface SendEmailRequest<TPayload = Record<string, unknown>> {
  emailType: string
  email: string
  payload: TPayload
}

export interface SendEmailResponse {
  message: string
}

export const sendEmail = <TPayload = Record<string, unknown>>(data: SendEmailRequest<TPayload>) => {
  return apiService.post<SendEmailResponse, SendEmailRequest<TPayload>>(API_ENDPOINTS.email, data)
}
