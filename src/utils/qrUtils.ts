import { QR_TOKEN_PARAM } from '@/pages/login/QRLogin/constants'

export const extractQrToken = (qrContent: string): string | null => {
  const url = new URL(qrContent)
  return url.searchParams.get(QR_TOKEN_PARAM)
}
