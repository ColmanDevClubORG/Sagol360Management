import { useTranslation } from 'react-i18next'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createLoginSchema, type LoginFormSchema } from '../loginSchema'
import { SGLDividerWithText } from '@/components/UI/DividerWithText/SGLDividerWithText'
import { LoginForm } from '../LoginForm/LoginForm'
import { QuickLoginQRButton } from './QuickLoginQRButton/QuickLoginQRButton'
import { LoginSupportInfo } from './LoginSupportInfo/LoginSupportInfo'
import * as styles from './styles'

export const LoginPatient = () => {
  const { t } = useTranslation()

  const loginSchema = createLoginSchema(t)
  const methods = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
  })
  const onSubmit = (data: LoginFormSchema) => {
    console.log('Final Number:', data.serializedNumber)
    methods.reset()
  }
  return (
    <div style={styles.loginPatientStyles}>
      <FormProvider {...methods}>
        <LoginForm
          title={t('login.enterPatientNumber')}
          inputText={t('login.example')}
          buttonText={t('login.sendCode')}
          onSubmit={methods.handleSubmit(onSubmit)}
        />
      </FormProvider>
      <SGLDividerWithText text={t('login.quickLogin')} />
      <QuickLoginQRButton buttonText={t('login.scanQr')} />
      <LoginSupportInfo text={t('login.supportInfo')} />
    </div>
  )
}
