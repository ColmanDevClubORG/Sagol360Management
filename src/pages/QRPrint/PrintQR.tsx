import { SGLCard } from '../../components/UI/Card/SGLCard'
import { SGLButton } from '../../components/UI/Button/SGLButton'
import { SGLTypography } from '../../components/UI/Typography/SGLTypography'
import { QRGeneration } from '../login/QRLogin/QRGeneration.tsx'
import { useTranslation } from 'react-i18next'
import * as styles from './styles'

export const PrintQR = () => {
  const { t } = useTranslation()

  const patientNumber = '123456'
  const password = 'add123'

  return (
    <div style={styles.pageContainer}>
      <div style={styles.cardContainer}>
        <SGLCard>
          <div style={styles.containerStyle}>
            <QRGeneration token="mock-token" />

            <SGLTypography styles={styles.textStyle}>{patientNumber}</SGLTypography>

            <SGLTypography styles={styles.textStyle}>{password}</SGLTypography>

            <SGLButton styles={styles.submitButtonContent}>{t('login.login')}</SGLButton>
          </div>
        </SGLCard>
      </div>
    </div>
  )
}
