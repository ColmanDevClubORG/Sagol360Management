import { useTranslation } from 'react-i18next'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createLoginSchema, type LoginFormSchema } from '../loginSchema'
import { SGLDividerWithText } from '@/components/UI/DividerWithText/SGLDividerWithText'
import { LoginForm } from '../LoginForm/LoginForm'
import { QuickLoginQRButton } from './QuickLoginQRButton/QuickLoginQRButton'
import { LoginSupportInfo } from './LoginSupportInfo/LoginSupportInfo'
import * as styles from './styles'
import { QRScanner } from '../QRLogin/QRScanner'
import { QRGeneration } from '../QRLogin/QRGeneration'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { SGLButton } from '@/components/UI/Button/SGLButton'
import { useQrLogin } from './useQrLogin'

export const LoginPatient = () => {
  const { t } = useTranslation()
  const {
    scannerOpen,
    scannerError,
    qrToken,
    openScanner,
    closeScanner,
    generateQrToken,
    handleQrSuccess,
    handleBackToLogin,
  } = useQrLogin()

  const loginSchema = createLoginSchema(t)
  const methods = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: LoginFormSchema) => {
    generateQrToken(data.serializedNumber)
    methods.reset()
  }

  return (
    <div style={styles.loginPatientStyles}>
      {scannerOpen ? (
        <QRScanner onSuccess={handleQrSuccess} onClose={closeScanner} />
      ) : !qrToken ? (
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
          <QuickLoginQRButton buttonText={t('login.scanQr')} onClick={openScanner} />
          {scannerError && (
            <SGLTypography styles={styles.errorText} variant="smallText">
              {scannerError}
            </SGLTypography>
          )}
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
