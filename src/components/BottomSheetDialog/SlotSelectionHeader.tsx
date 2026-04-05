import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import * as styles from './styles'
import { SGLTypography } from '../UI/Typography/SGLTypography'
import { useTranslation } from 'react-i18next'

interface SlotSelectionHeaderProps {
  onClose: () => void
}

export const SlotSelectionHeader = ({ onClose }: SlotSelectionHeaderProps) => {
  const { t } = useTranslation()
  return (
    <div style={styles.header}>
      <SGLTypography variant="largeTitle">{t('appointment.chooseNewDate')}</SGLTypography>
      <IconButton onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </div>
  )
}
