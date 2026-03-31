import * as styles from './styles'
import { SGLCard } from '../../../components/UI/Card/SGLCard'
import { SGLTypography } from '../../../components/UI/Typography/SGLTypography'
import { useTranslation } from 'react-i18next'
import { SGLCircularProgress } from '../../../components/UI/Progress/SGLCircularProgress'

interface ProgressProps {
  value: number
}

export const MobileProgressCard = ({ value }: ProgressProps) => {
  const { t } = useTranslation()
  return (
    <SGLCard variant="white" style={styles.mobileCardStyle}>
      <div style={styles.protocol60TextDiv}>
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
            <SGLTypography variant="smallText" styles={styles.progressLabelText}>
              {t('progress.outOf')}
            </SGLTypography>
          </div>
        }
      ></SGLCircularProgress>
    </SGLCard>
  )
}
