import { SGLInput } from '@/components/UI/Input/SGLInput'
import { SGLButton } from '@/components/UI/Button/SGLButton'
import { SGLLeftArrowIcon } from '@/components/UI/Icons/LeftArrowIcon/SGLLeftArrowIcon'
import { SGLIdIcon } from '@/components/UI/Icons/ID/SGLIdIcon'
import { theme } from '@/theme'
import * as styles from '../styles'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { useFormContext } from 'react-hook-form'
import type { LoginFormSchema } from '../loginSchema'

interface LoginFormProps {
  inputText: string
  buttonText: string
  title: string
  onSubmit: () => void
}

export const LoginForm = ({ inputText, buttonText, title, onSubmit }: LoginFormProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<LoginFormSchema>()

  return (
    <form onSubmit={onSubmit} style={styles.formContainer}>
      <SGLTypography variant="mediumTitle">{title}</SGLTypography>
      <SGLInput
        {...register('serializedNumber')}
        placeholder={inputText}
        icon={<SGLIdIcon />}
        style={styles.roundedInputStyle}
        customInputProps={styles.loginFormSlotProps}
        error={!!errors.serializedNumber}
        helperText={errors.serializedNumber?.message}
      />
      <SGLButton type="submit" styles={styles.submitButton}>
        <div style={styles.submitButtonContent}>
          <SGLLeftArrowIcon color={theme.palette.background.paper} />
          <span>{buttonText}</span>
        </div>
      </SGLButton>
    </form>
  )
}
