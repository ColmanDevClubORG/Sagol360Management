import { useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { createToken, verifyToken } from '@/services/qrService'
import { extractQrToken } from '@/utils/qrUtils'
import { CANT_GET_TOKEN, NAV_ROUTES } from '@/components/NavBar/constants'

export const useQrLogin = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [scannerOpen, setScannerOpen] = useState(false)
  const [scannerError, setScannerError] = useState<string | null>(null)
  const [qrToken, setQrToken] = useState<string>()

  const openScanner = useCallback(() => {
    setScannerError(null)
    setScannerOpen(true)
  }, [])

  const closeScanner = useCallback(() => {
    setScannerOpen(false)
  }, [])

  const generateQrToken = useCallback((userId: string) => {
    const token = createToken(userId)
    setQrToken(token)
  }, [])

  const handleQrSuccess = useCallback(
    async (result: string) => {
      try {
        const token = extractQrToken(result)
        if (!token) {
          throw new Error(CANT_GET_TOKEN)
        }
        await verifyToken(token)
        navigate(NAV_ROUTES.home)
      } catch {
        setScannerError(t('login.qrLoginFailed'))
        setScannerOpen(false)
      }
    },
    [navigate, t],
  )

  const handleBackToLogin = useCallback(() => {
    setQrToken(undefined)
  }, [])

  return {
    scannerOpen,
    scannerError,
    qrToken,
    openScanner,
    closeScanner,
    generateQrToken,
    handleQrSuccess,
    handleBackToLogin,
  }
}
