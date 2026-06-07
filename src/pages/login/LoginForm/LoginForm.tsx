import { SGLInput } from '@/components/UI/Input/SGLInput'
import { SGLButton } from '@/components/UI/Button/SGLButton'
import { SGLLeftArrowIcon } from '@/components/UI/Icons/LeftArrowIcon/SGLLeftArrowIcon'
import { SGLIdIcon } from '@/components/UI/Icons/ID/SGLIdIcon'
import { theme } from '@/theme'
import * as loginStyles from '../styles'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { useFormContext } from 'react-hook-form'
import type { LoginFormSchema } from '../loginSchema'
import type { CSSProperties } from 'react'

interface LoginFormProps {
  inputText: string
  buttonText: string
  title: string
  onSubmit: () => void
  styles?: CSSProperties
}

export const LoginForm = ({ inputText, buttonText, title, onSubmit, styles }: LoginFormProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<LoginFormSchema>()

  return (
    <form onSubmit={onSubmit} style={{ ...loginStyles.formContainer, ...styles }}>
      <SGLTypography variant="mediumTitle">{title}</SGLTypography>
      <SGLInput
        {...register('serializedNumber')}
        placeholder={inputText}
        icon={<SGLIdIcon />}
        style={loginStyles.roundedInputStyle}
        customInputProps={loginStyles.loginFormSlotProps}
        error={!!errors.serializedNumber}
        helperText={errors.serializedNumber?.message}
      />
      <SGLButton type="submit" styles={loginStyles.submitButton}>
        <div style={loginStyles.submitButtonContent}>
          <SGLLeftArrowIcon color={theme.palette.background.paper} />
          <span>{buttonText}</span>
        </div>
      </SGLButton>
    </form>
  )
}
