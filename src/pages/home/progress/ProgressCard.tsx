import * as styles from './styles'
import { SGLCard } from '../../../components/UI/Card/SGLCard'
import { SGLTypography } from '../../../components/UI/Typography/SGLTypography'
import { useTranslation } from 'react-i18next'
import { SGLCircularProgress } from '../../../components/UI/Progress/SGLCircularProgress'
import { useIsMobile } from '@/hooks/useIsMobile'

interface ProgressCardProps {
  value: number
}

const variantStyles = {
  mobile: {
    card: 'white' as const,
    text: undefined,
    wellDone: styles.wellDoneText,
    progress: styles.circularProgress,
    valueText: styles.purpleText,
    labelText: styles.progressLabelText,
  },
  desktop: {
    card: 'purple' as const,
    text: styles.desktopText,
    wellDone: styles.desktopWellDoneText,
    progress: styles.desktopCircularProgress,
    valueText: styles.whiteText,
    labelText: styles.whiteText,
  },
}

export const ProgressCard = ({ value }: ProgressCardProps) => {
  const { t } = useTranslation()
  const isMobile = useIsMobile()
  const s = variantStyles[isMobile ? 'mobile' : 'desktop']

  return (
    <SGLCard variant={s.card} style={styles.cardStyle}>
      <div style={styles.protocol60TextDiv}>
        <SGLTypography variant="mediumTitle" styles={s.text}>
          {t('progress.protocol')}
        </SGLTypography>
        <SGLTypography variant="mediumText" styles={s.text}>
          {t('progress.treatment')}
        </SGLTypography>
        <SGLTypography variant="smallTitle" styles={s.wellDone}>
          {t('progress.wellDone')}
        </SGLTypography>
      </div>

      <SGLCircularProgress
        value={value}
        style={s.progress}
        size={75}
        label={
          <div style={styles.progressDiv}>
            <SGLTypography variant="mediumTitle" styles={s.valueText}>
              {value}
            </SGLTypography>
            <SGLTypography variant="smallText" styles={s.labelText}>
              {t('progress.outOf')}
            </SGLTypography>
          </div>
        }
      />
    </SGLCard>
  )
}
