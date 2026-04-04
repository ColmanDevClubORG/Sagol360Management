import { SGLCard } from '../UI/Card/SGLCard'
import { SGLTypography } from '../UI/Typography/SGLTypography'
import { useTranslation } from 'react-i18next'
import { theme } from '../../theme'
import * as styles from './styles'

export const AddButton = () => {
  const { t } = useTranslation()

  return (
    <div style={styles.buttonsDivStyle}>
      <SGLCard variant="purple" style={styles.buttonStyle}>
        <SGLTypography variant="mediumTitle" color={theme.palette.background.paper}>
          {t('nav.add')}
        </SGLTypography>
      </SGLCard>
    </div>
  )
}
