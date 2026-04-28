import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { useTranslation } from 'react-i18next'

export const MetricsReportHeader = () => {
  const { t } = useTranslation()

  return (
    <div>
      <SGLTypography>{t('metricsReport.title')}</SGLTypography>
      <SGLTypography>{t('metricsReport.description')}</SGLTypography>
    </div>
  )
}
