import { Html5Qrcode } from 'html5-qrcode'
import { useEffect, useRef, useState } from 'react'

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

    let cancelled = false
    let stopped = false

    Html5Qrcode.getCameras()
      .then((devices) => {
        if (cancelled) return
        if (!devices?.length) {
          setLoading(false)
          console.error('No camera devices found')
          return
        }

        const cameraId = devices[0].id

        return qr
          .start(
            cameraId,
            {
              fps: 10,
              qrbox: 250,
            },
            async (decodedText) => {
              if (stopped) return
              stopped = true
              stoppedRef.current = true
              await qr.stop()
              onSuccess(decodedText)
            },
            () => {},
          )
          .then(() => {
            scannerReadyRef.current = true
            if (!cancelled) setLoading(false)
          })
      })
      .catch((err) => {
        if (!cancelled) {
          setLoading(false)
          console.log(err?.message || 'Camera access denied or unavailable')
        }
      })

    return () => {
      cancelled = true
      stopped = true
      if (scannerReadyRef.current && qrRef.current && !stoppedRef.current) {
        qrRef.current.stop().catch(() => {})
      }
      qrRef.current = null
      startedRef.current = false
    }
  }, [onSuccess])

  return (
    <div style={{ position: 'relative', minHeight: 250 }}>
      <div id="reader" />
      {loading && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666',
          }}
        >
          Requesting camera permission...
        </div>
      )}
    </div>
  )
}
