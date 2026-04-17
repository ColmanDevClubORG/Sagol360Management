import { useTranslation } from 'react-i18next'
import { LoginForm } from '../LoginForm/LoginForm'
import { createLoginSchema, type LoginFormSchema } from '../loginSchema'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginStaffStyles } from './styles'

export const LoginStaff = () => {
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
    <FormProvider {...methods}>
      <LoginForm
        inputText={t('login.staffNumber')}
        buttonText={t('login.enterDashboard')}
        title={t('login.enterStaffNumber')}
        onSubmit={methods.handleSubmit(onSubmit)}
        styles={loginStaffStyles}
      />
    </FormProvider>
  )
}
