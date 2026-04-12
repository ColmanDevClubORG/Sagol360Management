import { SGLButton } from '@/components/UI/Button/SGLButton'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import DoneIcon from '@mui/icons-material/Done'
import { useTranslation } from 'react-i18next'
import { CheckInStyles } from './style'
import { theme } from '@/theme'

interface checkedButtonProps {
  onClose: () => void
}

export const CheckedButton = ({ onClose }: checkedButtonProps) => {
  const { t } = useTranslation()

  return (
    <SGLButton onClick={onClose} variant="contained" styles={CheckInStyles(theme).completedButton}>
      <SGLTypography variant="smallTitle" color="white">
        {t('checkIn.completedSuccessfully')}
      </SGLTypography>
      <DoneIcon />
    </SGLButton>
  )
}
