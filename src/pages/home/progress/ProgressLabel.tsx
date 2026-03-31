import * as styles from './styles'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { useTranslation } from 'react-i18next'
import type { VariantStyle } from './ProgressCard'

interface ProgressLabelProps {
  value: number
  s: VariantStyle
}

export const ProgressLabel = ({ value, s }: ProgressLabelProps) => {
  const { t } = useTranslation()
  return (
    <div style={styles.progressDiv}>
      <SGLTypography variant="mediumTitle" styles={s.valueText}>
        {value}
      </SGLTypography>
      <SGLTypography variant="smallText" styles={s.labelText}>
        {t('progress.outOf')}
      </SGLTypography>
    </div>
  )
}
