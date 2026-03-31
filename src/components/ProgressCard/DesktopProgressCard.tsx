import * as styles from './styles'
import { SGLCard } from '../UI/Card/SGLCard'
import { SGLTypography } from '../UI/Typography/SGLTypography'
import { useTranslation } from 'react-i18next'
import { SGLCircularProgress } from '../UI/Progress/SGLCircularProgress'

interface ProgressProps {
  value: number
}

export const DesktopProgressCard = ({ value }: ProgressProps) => {
  const { t } = useTranslation()

  return (
    <SGLCard variant="purple" style={styles.mobileCardStyle}>
      <div style={styles.textDiv}>
        <SGLTypography variant="mediumTitle" styles={styles.desktopText}>
          {t('progress.protocol')}
        </SGLTypography>
        <SGLTypography variant="mediumText" styles={styles.desktopText}>
          {t('progress.treatment')}
        </SGLTypography>
        <SGLTypography variant="smallTitle" styles={styles.desktopWellDoneText}>
          {t('progress.wellDone')}
        </SGLTypography>
      </div>

      <SGLCircularProgress
        value={value}
        style={styles.desktopCircularProgress}
        size={75}
        label={
          <div style={styles.progressDiv}>
            <SGLTypography variant="mediumTitle" styles={styles.whiteText}>
              {value}
            </SGLTypography>
            <SGLTypography variant="smallText" styles={styles.whiteText}>
              {t('progress.outOf')}
            </SGLTypography>
          </div>
        }
      ></SGLCircularProgress>
    </SGLCard>
  )
}
