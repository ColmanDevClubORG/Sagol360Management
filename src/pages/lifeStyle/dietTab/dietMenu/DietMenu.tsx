import { SGLCard } from '@/components/UI/Card/SGLCard'
import * as styles from './styles'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { Salad } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const DietMenu = () => {
  const { t } = useTranslation()

  return (
    <SGLCard variant="outlined" style={styles.cardStyle}>
      <div style={styles.titleDivStyle}>
        <Salad size={styles.iconSize} />
        <SGLTypography variant="smallTitle" styles={styles.typographyStyle}>
          {t('dietMenu.sugarBalance')}
        </SGLTypography>
      </div>
      <div style={styles.bodyDivStyle}>
        <SGLTypography variant="smallText" styles={styles.typographyStyle}>
          {t('dietMenu.meals')}
        </SGLTypography>
      </div>
    </SGLCard>
  )
}
