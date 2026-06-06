import { Html5Qrcode } from 'html5-qrcode'
import { useEffect, useRef, useState } from 'react'
import * as styles from './styles'

interface QRScannerProps {
  onSuccess: (value: string) => void
}

export const QRScanner = ({ onSuccess }: QRScannerProps) => {
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
        const devices = await Html5Qrcode.getCameras()
        if (cancelled) return
        if (!devices?.length) {
          setLoading(false)
          console.error('No camera devices found')
          return
        }
        const cameraId = devices[0].id
        await qr.start(cameraId, { fps: 20, qrbox: 250 }, handleDecode, handleDecodeError)
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
      {loading && <div style={styles.loadingOverlay}>Requesting camera permission...</div>}
    </div>
  )
}
