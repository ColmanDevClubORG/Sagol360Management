import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { useTranslation } from 'react-i18next'

export const MetricsReportHeader = () => {
  const { t } = useTranslation()

  return (
    <div>
      <SGLTypography variant="mediumTitle">{t('metricsReport.title')}</SGLTypography>
      <SGLTypography variant="mediumText">{t('metricsReport.description')}</SGLTypography>
    </div>
  )
}
