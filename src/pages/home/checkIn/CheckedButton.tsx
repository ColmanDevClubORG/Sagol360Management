import { SGLButton } from '@/components/UI/Button/SGLButton'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import DoneIcon from '@mui/icons-material/Done'
import { useTranslation } from 'react-i18next'
import { completedButton } from './style'
import { theme } from '@/theme'

interface checkedButtonProps {
  onClose: () => void
}

export const CheckedButton = ({ onClose }: checkedButtonProps) => {
  const { t } = useTranslation()

  return (
    <SGLButton onClick={onClose} variant="contained" styles={completedButton(theme)}>
      <SGLTypography variant="smallTitle" color="white">
        {t('checkIn.completedSuccessfully')}
      </SGLTypography>
      <DoneIcon />
    </SGLButton>
  )
}
