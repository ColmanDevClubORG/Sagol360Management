import { SGLCard } from '@/components/UI/Card/SGLCard'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import * as styles from './styles'
import { Scale } from 'lucide-react'
import { SGLButton } from '@/components/UI/Button/SGLButton'
import { useTranslation } from 'react-i18next'

export const BalanceTraining = () => {
  const { t } = useTranslation()
  return (
    <SGLCard variant="outlined" style={styles.cardStyle}>
      <div style={styles.titleRowStyle}>
        <Scale style={styles.iconStyle} />
        <SGLTypography variant="smallTitle" styles={styles.typographyStyle}>
          {t('balanceTraining.title')}
        </SGLTypography>
      </div>
      <div style={styles.bodyContainerStyle}>
        <SGLTypography variant="smallText" styles={styles.typographyStyle}>
          {t('balanceTraining.description')}
        </SGLTypography>
        <SGLButton onClick={() => {}} styles={styles.buttonStyle}>
          <SGLTypography variant="smallTitle" styles={styles.buttonTypographyStyle}>
            {t('balanceTraining.button')}
          </SGLTypography>
        </SGLButton>
      </div>
    </SGLCard>
  )
}
