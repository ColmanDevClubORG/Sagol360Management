import { MetricCard } from '../metricCard/MetricCard'
import { reportListCardStyle } from './style'
import { METRICS_REPORT_DATA } from './MetricsReportData'

export const MetricsReportListCard = () => {
  return (
    <div style={reportListCardStyle}>
      {METRICS_REPORT_DATA.map((metric, index) => (
        <MetricCard
          titleKey={metric.titleKey}
          minLabelKey={metric.minLabelKey}
          maxLabelKey={metric.maxLabelKey}
          onChange={metric.onChange}
          icon={<metric.icon />}
          colorIcon={metric.colorIcon}
          key={index}
        />
      ))}
    </div>
  )
}
