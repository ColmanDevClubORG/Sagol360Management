import * as styles from './styles'
import { SGLTypography } from '../UI/Typography/SGLTypography'
import { useTranslation } from 'react-i18next'

export const SlotSelectionHeader = () => {
  const { t } = useTranslation()
  return (
    <div style={styles.header}>
      <SGLTypography variant="largeTitle">{t('appointment.chooseNewDate')}</SGLTypography>
    </div>
  )
}
