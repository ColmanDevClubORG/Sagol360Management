import { MetricCard } from '../metricCard/MetricCard'
import { reportListCardStyle } from './style'
import { METRICS_REPORT_DATA } from './MetricsReportData'
import { useIsMobile } from '@/hooks/useIsMobile'

interface MetricsReportListCardProps {
  onChange: (id: string, value: number) => void
}

export const MetricsReportListCard = ({ onChange }: MetricsReportListCardProps) => {
  const isMobile = useIsMobile()

  return (
    <div style={reportListCardStyle(isMobile)}>
      {METRICS_REPORT_DATA.map((metric, index) => (
        <MetricCard
          titleKey={metric.titleKey}
          minLabelKey={metric.minLabelKey}
          maxLabelKey={metric.maxLabelKey}
          onChange={(value) => onChange(metric.id, value)}
          icon={<metric.icon />}
          colorIcon={metric.colorIcon}
          key={index}
        />
      ))}
    </div>
  )
}
