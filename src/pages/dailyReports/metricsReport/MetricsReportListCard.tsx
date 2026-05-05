import { MetricCard } from '../metricCard/MetricCard'
import type { PaletteColorKey } from '../metricCard/MetricCard'
import { reportListCardStyle } from './style'
import { MetricsReportData } from './MetricsReportData'

export const MetricsReportListCard = () => {
  return (
    <div style={reportListCardStyle}>
      {MetricsReportData.map((metric, index) => (
        <MetricCard
          titleKey={metric.titleKey}
          minLabelKey={metric.minLabelKey}
          maxLabelKey={metric.maxLabelKey}
          onChange={metric.onChange}
          icon={<metric.icon />}
          colorIcon={metric.colorIcon as PaletteColorKey}
          key={index}
        />
      ))}
    </div>
  )
}
