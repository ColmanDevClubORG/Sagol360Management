import * as styles from './styles'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { useTranslation } from 'react-i18next'
import type { VariantStyle } from './ProgressCard'

interface ProgressTextProps {
  style: VariantStyle
}

export const ProgressCardText = ({ style }: ProgressTextProps) => {
  const { t } = useTranslation()
  return (
    <div style={styles.protocol60TextDiv}>
      <SGLTypography variant="mediumTitle" styles={style.text}>
        {t('progress.protocol')}
      </SGLTypography>
      <SGLTypography variant="mediumText" styles={style.text}>
        {t('progress.treatment')}
      </SGLTypography>
      <SGLTypography variant="smallTitle" styles={style.wellDone}>
        {t('progress.wellDone')}
      </SGLTypography>
    </div>
  )
}
