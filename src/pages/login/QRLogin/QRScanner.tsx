import { Html5Qrcode } from 'html5-qrcode'
import { useEffect, useRef, useState } from 'react'
import * as styles from './styles'

interface QRScannerProps {
  onSuccess: (value: string) => void
  onClose?: () => void
}

export const QRScanner = ({ onSuccess, onClose }: QRScannerProps) => {
  const qrRef = useRef<Html5Qrcode | null>(null)
  const startedRef = useRef(false)
  const stoppedRef = useRef(false)
  const scannerReadyRef = useRef(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (startedRef.current) return
    startedRef.current = true

    const qr = new Html5Qrcode('reader')
    qrRef.current = qr

    const cancelled = false
    let stopped = false

    const handleDecode = async (decodedText: string) => {
      if (stopped) return
      stopped = true
      stoppedRef.current = true
      await qr.stop()
      onSuccess(decodedText)
    }
    const handleDecodeError = () => {}

    const handleScannerStarted = () => {
      scannerReadyRef.current = true
      if (!cancelled) setLoading(false)
    }

    const handleCameraError = (err: unknown) => {
      if (!cancelled) {
        setLoading(false)
        console.log((err as Error)?.message || 'Camera access denied or unavailable')
      }
    }

    const startScanner = async () => {
      try {
        await qr.start(
          { facingMode: 'environment' },
          { fps: 20, qrbox: 250 },
          handleDecode,
          handleDecodeError,
        )
        handleScannerStarted()
      } catch (err) {
        handleCameraError(err)
      }
    }
    startScanner()
  })

  return (
    <div style={styles.scannerContainer}>
      <div id="reader" />
      {onClose && (
        <button onClick={onClose} style={styles.closeButton}>
          X
        </button>
      )}
      {loading && <div style={styles.loadingOverlay}>Requesting camera permission...</div>}
    </div>
  )
}
