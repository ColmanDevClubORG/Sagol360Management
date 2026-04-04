import { useTranslation } from 'react-i18next'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { SGLSelect } from '@/components/UI/Select/SGLSelect'
import { progressGraphHeaderStyles } from './styles'

export const GraphHeader = () => {
  const { t } = useTranslation()

  return (
    <div style={progressGraphHeaderStyles.container}>
      <SGLSelect options={[t('charts.last7Days')]} />
      <SGLTypography variant="mediumTitle">{t('charts.weeklyTrends')}</SGLTypography>
    </div>
  )
}
