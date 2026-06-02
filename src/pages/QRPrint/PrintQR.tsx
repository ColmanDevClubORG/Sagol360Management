import { SGLCard } from '../../components/UI/Card/SGLCard'
import { SGLButton } from '../../components/UI/Button/SGLButton'
import { SGLTypography } from '../../components/UI/Typography/SGLTypography'
import { SGLImage } from '../../components/UI/Image/SGLImage'
import { useTranslation } from 'react-i18next'
import * as styles from './styles'

export const PrintQR = () => {
  const { t } = useTranslation()

  const patientNumber = '123456'
  const password = 'add123'

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          width: '400px',
        }}
      >
        <SGLCard>
          <div style={styles.containerStyle}>
            <SGLImage
              src="https://www.dangot.com/Media/Uploads/2D-BAROCDE(1).png"
              alt="QR"
              styles={{
                width: '300px',
                height: '300px',
                marginTop: '-40px',
                marginBottom: '-40px',
              }}
            />

            <SGLTypography styles={styles.textStyle}>{patientNumber}</SGLTypography>

            <SGLTypography styles={styles.textStyle}>{password}</SGLTypography>

            <SGLButton styles={styles.submitButtonContent}>{t('login.login')}</SGLButton>
          </div>
        </SGLCard>
      </div>
    </div>
  )
}
