export const QR_VERIFY_ROUTE = '/QR/verify'

export const buildQrLoginUrl = (token: string) =>
  `${window.location.origin}${QR_VERIFY_ROUTE}?token=${encodeURIComponent(token)}`
