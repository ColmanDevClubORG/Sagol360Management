import { SGLButton } from '@/components/UI/Button/SGLButton'
import { useTranslation } from 'react-i18next'
import { outlinedButtonStyles, containedButtonStyles } from './style'
import { theme } from '@/theme'

interface CheckInOptionsProps {
  onCheckIn: () => void
}

export const CheckInOptions = ({ onCheckIn }: CheckInOptionsProps) => {
  const { t } = useTranslation()

  return (
    <>
      <SGLButton onClick={onCheckIn} variant="contained" styles={containedButtonStyles(theme)}>
        {t('checkIn.performCheckIn')}
      </SGLButton>
      <SGLButton onClick={() => {}} variant="outlined" styles={outlinedButtonStyles(theme)}>
        {t('checkIn.notComing')}
      </SGLButton>
    </>
  )
}
