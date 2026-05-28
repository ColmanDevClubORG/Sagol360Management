import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { MetricsReport } from './metricsReport/MetricsReport'
import { ProgressGraph } from './progressGraph/ProgressGraph'
import { rootStyleMobile, titleStyleMobile, titleStyleDesktop, rootStyleDesktop } from './style'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useTranslation } from 'react-i18next'

export const DailyReports = () => {
  const isMobile = useIsMobile()

  const { t } = useTranslation()

  return (
    <>
      <div style={isMobile ? titleStyleMobile : titleStyleDesktop}>
        <SGLTypography variant="mediumTitle" color="darkPurple">
          {t('dailyReport.title')}
        </SGLTypography>
      </div>
      <div style={isMobile ? rootStyleMobile : rootStyleDesktop}>
        <ProgressGraph />
        <MetricsReport />
      </div>
    </>
  )
}
