import * as styles from './styles'
import { SGLCard } from '../UI/Card/SGLCard'
import { SGLTypography } from '../UI/Typography/SGLTypography'
import { useTranslation } from 'react-i18next'
import { SGLCircularProgress } from '../UI/Progress/SGLCircularProgress'

interface ProgressProps {
  value: number
}

export const MobileProgressCard = ({ value }: ProgressProps) => {
  const { t } = useTranslation()
  return (
    <SGLCard variant="white" style={styles.mobileCardStyle}>
      <div style={styles.textDiv}>
        <SGLTypography variant="mediumTitle">{t('progress.protocol')}</SGLTypography>
        <SGLTypography variant="mediumText">{t('progress.treatment')}</SGLTypography>
        <SGLTypography variant="smallTitle" styles={styles.wellDoneText}>
          {t('progress.wellDone')}
        </SGLTypography>
      </div>

      <SGLCircularProgress
        value={value}
        style={styles.circularProgress}
        size={75}
        label={
          <div style={styles.progressDiv}>
            <SGLTypography variant="mediumTitle" styles={styles.purpleText}>
              {value}
            </SGLTypography>
            <SGLTypography variant="smallText">{t('מתוך 60')}</SGLTypography>
          </div>
        }
      ></SGLCircularProgress>
    </SGLCard>
  )
}
