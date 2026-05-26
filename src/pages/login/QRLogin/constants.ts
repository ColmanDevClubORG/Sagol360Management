export const buildQrLoginUrl = (token: string) =>
  `${window.location.origin}/qr-login?token=${encodeURIComponent(token)}`
