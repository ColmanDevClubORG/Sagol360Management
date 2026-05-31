export const QR_TOKEN_PARAM = 'token'

export const buildQrLoginUrl = (token: string) =>
  `${window.location.origin}/qr-login?token=${encodeURIComponent(token)}`
