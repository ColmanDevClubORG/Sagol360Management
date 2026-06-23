import { API_ENDPOINTS } from '@/constants/api.constants'
import { apiService } from '@/services/api/api.service'
import type {
  QRCreateBody,
  QRCreateResponse,
  QRVerifyBody,
  QRVerifyResponse,
} from '@/types/qr.types'

export const createQR = (data: QRCreateBody) => {
  return apiService.post<QRCreateResponse, QRCreateBody>(API_ENDPOINTS.createQR, data)
}

export const verifyQR = (data: QRVerifyBody) => {
  return apiService.post<QRVerifyResponse, QRVerifyBody>(API_ENDPOINTS.verifyQR, data)
}
