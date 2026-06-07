import { MetricsReport } from './metricsReport/MetricsReport'
import { ProgressGraph } from './progressGraph/ProgressGraph'
import { rootStyle } from './style'

export const DailyReports = () => {
  return (
    <div style={rootStyle}>
      <ProgressGraph />
      <MetricsReport />
    </div>
  )
}
