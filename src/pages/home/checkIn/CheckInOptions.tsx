import { SGLButton } from '@/components/UI/Button/SGLButton'
import { useTranslation } from 'react-i18next'
import { outlinedButtonStyles, containedButtonStyles } from './style'
import { theme } from '@/theme'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'

interface CheckInOptionsProps {
  onCheckIn: () => void
}

export const CheckInOptions = ({ onCheckIn }: CheckInOptionsProps) => {
  const { t } = useTranslation()

  return (
    <>
      <SGLButton onClick={onCheckIn} variant="contained" styles={containedButtonStyles(theme)}>
        <SGLTypography variant="smallTitle" color={theme.palette.purple.main}>
          {t('checkIn.performCheckIn')}
        </SGLTypography>
      </SGLButton>
      <SGLButton onClick={() => {}} variant="outlined" styles={outlinedButtonStyles(theme)}>
        <SGLTypography variant="smallTitle" color="white">
          {t('checkIn.notComing')}
        </SGLTypography>
      </SGLButton>
    </>
  )
}
