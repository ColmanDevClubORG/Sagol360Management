import { SGLButton } from '@/components/UI/Button/SGLButton'
import { useTranslation } from 'react-i18next'
import { CheckInStyles } from './style'
import { theme } from '@/theme'

interface CheckInOptionsProps {
  onCheckIn: () => void
}

export const CheckInOptions = ({ onCheckIn }: CheckInOptionsProps) => {
  const { t } = useTranslation()

  return (
    <>
      <SGLButton
        onClick={onCheckIn}
        variant="contained"
        styles={CheckInStyles(theme).containedButton}
      >
        {t('checkIn.performCheckIn')}
      </SGLButton>
      <SGLButton onClick={() => {}} variant="outlined" styles={CheckInStyles(theme).outlinedButton}>
        {t('checkIn.notComing')}
      </SGLButton>
    </>
  )
}
