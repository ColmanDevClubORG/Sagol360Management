import { SGLCard } from '../../components/UI/Card/SGLCard'
import { SGLButton } from '../../components/UI/Button/SGLButton'
import { SGLTypography } from '../../components/UI/Typography/SGLTypography'
import { QRGeneration } from '../login/QRLogin/QRGeneration.tsx'
import { useTranslation } from 'react-i18next'
import * as styles from './styles'

export const PrintQR = () => {
  const { t } = useTranslation()

  const MOCK_PATIENT_NUMBER = '123456'
  const MOCK_PASSWORD = 'add123'

  const MOCK_TOKEN = 'mock-token'

  return (
    <div style={styles.pageContainer}>
      <div style={styles.cardContainer}>
        <SGLCard>
          <div style={styles.containerStyle}>
            <QRGeneration token={MOCK_TOKEN} />
            <SGLTypography styles={styles.textStyle}>{MOCK_PATIENT_NUMBER}</SGLTypography>

            <SGLTypography styles={styles.textStyle}>{MOCK_PASSWORD}</SGLTypography>

            <SGLButton styles={styles.submitButtonContent}>{t('login.login')}</SGLButton>
          </div>
        </SGLCard>
      </div>
    </div>
  )
}
