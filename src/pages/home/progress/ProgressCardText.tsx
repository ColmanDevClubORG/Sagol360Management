import * as styles from './styles'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { useTranslation } from 'react-i18next'
import type { VariantStyle } from './ProgressCard'

interface ProgressTextProps {
  s: VariantStyle
}

export const ProgressCardText = ({ s }: ProgressTextProps) => {
  const { t } = useTranslation()
  return (
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
  )
}
