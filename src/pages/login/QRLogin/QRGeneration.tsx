import { QRCodeCanvas } from 'qrcode.react'
import { buildQrLoginUrl } from './constants'

interface QRGenerationProps {
  token: string
}

// TODO: Mock QR login flow.
// token is returned from POST /api/login/QR/create after sending userId and password.
// This component renders a QR URL that contains that token.
// Flow: create token -> render QR -> scan -> POST /api/login/QR/verify with token -> navigate to home.
// Authentication, encryption, expiration, and real user validation should be implemented properly later.
export const QRGeneration = ({ token }: QRGenerationProps) => {
  return <QRCodeCanvas value={buildQrLoginUrl(token)} />
}
