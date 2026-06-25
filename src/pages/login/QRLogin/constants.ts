export const QR_VERIFY_ROUTE = '/QR/verify'

const getAppBaseUrl = () => import.meta.env.VITE_APP_BASE_URL || ''

export const buildQrLoginUrl = (token: string) => {
  const appBaseUrl = getAppBaseUrl()
  const normalizedAppBaseUrl = appBaseUrl.endsWith('/') ? appBaseUrl.slice(0, -1) : appBaseUrl

  return `${normalizedAppBaseUrl}${QR_VERIFY_ROUTE}?token=${encodeURIComponent(token)}`
}
