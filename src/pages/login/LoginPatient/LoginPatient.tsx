import { useTranslation } from 'react-i18next'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createLoginSchema, type LoginFormSchema } from '../loginSchema'
import { SGLDividerWithText } from '@/components/UI/DividerWithText/SGLDividerWithText'
import { LoginForm } from '../LoginForm/LoginForm'
import { QuickLoginQRButton } from './QuickLoginQRButton/QuickLoginQRButton'
import { LoginSupportInfo } from './LoginSupportInfo/LoginSupportInfo'
import * as styles from './styles'
import { useNavigate } from 'react-router-dom'
import { QRScanner } from '../QRLogin/QRScanner'
import { useState } from 'react'
import { QRGeneration } from '../QRLogin/QRGeneration'
import { createToken, verifyToken } from '@/services/qrService'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { SGLButton } from '@/components/UI/Button/SGLButton'
import { extractQrToken } from '@/utils/qrUtils'
import { NAV_ROUTES } from '@/components/NavBar/constants'

export const LoginPatient = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [scannerOpen, setScannerOpen] = useState(false)
  const [scannerError, setScannerError] = useState<string | null>(null)
  const [qrToken, setQrToken] = useState<string>()

  const loginSchema = createLoginSchema(t)
  const methods = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: LoginFormSchema) => {
    console.log('Final Number:', data.serializedNumber)
    const token = createToken(data.serializedNumber)
    setQrToken(token)

    methods.reset()
  }

  const handleQrSuccess = async (result: string) => {
    try {
      const token = extractQrToken(result)
      console.log(NAV_ROUTES.home)

      if (!token) {
        throw new Error('cant get token')
      }
      await verifyToken(token)
      navigate(NAV_ROUTES.home)
    } catch {
      setScannerError(t('login.qrLoginFailed'))
      setScannerOpen(false)
    }
  }

  const handleBackToLogin = () => {
    setQrToken(undefined)
  }

  return (
    <div style={styles.loginPatientStyles}>
      {!qrToken ? (
        <>
          <FormProvider {...methods}>
            <LoginForm
              title={t('login.enterPatientNumber')}
              inputText={t('login.example')}
              buttonText={t('login.sendCode')}
              onSubmit={methods.handleSubmit(onSubmit)}
            />
          </FormProvider>
          <SGLDividerWithText text={t('login.quickLogin')} />
          <QuickLoginQRButton
            buttonText={t('login.scanQr')}
            onClick={() => {
              setScannerError(null)
              setScannerOpen(true)
            }}
          />
          {scannerError && (
            <SGLTypography styles={styles.errorText} variant="smallText">
              {scannerError}
            </SGLTypography>
          )}
          {scannerOpen && <QRScanner onSuccess={handleQrSuccess} />}
          <LoginSupportInfo text={t('login.supportInfo')} />
        </>
      ) : (
        <div style={styles.qrCardContainer}>
          <SGLTypography variant="mediumTitle">{t('login.scanQrCode')}</SGLTypography>
          <QRGeneration token={qrToken} />
          <SGLButton onClick={handleBackToLogin}>{t('login.back')}</SGLButton>
        </div>
      )}
    </div>
  )
}
