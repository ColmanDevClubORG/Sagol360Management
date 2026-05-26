import { QRCodeCanvas } from 'qrcode.react'
import { buildQrLoginUrl } from './constants'

interface QRGenerationProps {
  token: string
}

// TODO: Mock QR login flow.
// This component only validates the QR infrastructure:
// create token -> render QR -> scan -> verify token -> navigate to home.
// Authentication, encryption, expiration, and real user validation should be implemented properly later.
export const QRGeneration = ({ token }: QRGenerationProps) => {
  return <QRCodeCanvas value={buildQrLoginUrl(token)} />
}
