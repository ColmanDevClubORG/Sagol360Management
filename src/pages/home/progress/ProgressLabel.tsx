import * as styles from './styles'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { useTranslation } from 'react-i18next'
import type { VariantStyle } from './ProgressCard'

interface ProgressLabelProps {
  value: number
  style: VariantStyle
}

export const ProgressLabel = ({ value, style }: ProgressLabelProps) => {
  const { t } = useTranslation()
  return (
    <div style={styles.progressDiv}>
      <SGLTypography variant="mediumTitle" styles={style.valueText}>
        {value}
      </SGLTypography>
      <SGLTypography variant="smallText" styles={style.labelText}>
        {t('progress.outOf')}
      </SGLTypography>
    </div>
  )
}
