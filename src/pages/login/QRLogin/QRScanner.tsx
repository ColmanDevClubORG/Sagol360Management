import { Html5Qrcode } from 'html5-qrcode'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import * as styles from './styles'
import { SGLCloseIcon } from '@/components/UI/Icons/CloseIcon/SGLCloseIcon'

interface QRScannerProps {
  onSuccess: (value: string) => void
  onClose?: () => void
}

export const QRScanner = ({ onSuccess, onClose }: QRScannerProps) => {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const qr = new Html5Qrcode('reader')
    let stopped = false
    let started = false

    const handleDecode = async (decodedText: string) => {
      if (stopped) return
      stopped = true
      await qr.stop().catch(() => undefined)
      onSuccess(decodedText)
    }

    const startScanner = async () => {
      try {
        await qr.start(
          { facingMode: 'environment' },
          { fps: 20, qrbox: 250 },
          handleDecode,
          () => {},
        )
        started = true
        setLoading(false)
      } catch (err) {
        setLoading(false)
        setError((err as Error)?.message || t('login.cameraPermission'))
      }
    }
    startScanner()

    return () => {
      if (started && !stopped) {
        qr.stop().catch(() => undefined)
      }
    }
  }, [])

  return (
    <div style={styles.scannerContainer}>
      <div id="reader" style={styles.scannerReader} />
      {onClose && <SGLCloseIcon onClick={onClose} styles={styles.closeIcon} />}
      {loading && !error && <div style={styles.loadingOverlay}>{t('login.cameraPermission')}</div>}
      {error && <div style={styles.loadingOverlay}>{error}</div>}
    </div>
  )
}
