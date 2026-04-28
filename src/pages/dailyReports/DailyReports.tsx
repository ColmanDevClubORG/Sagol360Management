import { MetricsReportButton } from './metricsReport/MetricsReportButton'
import { MetricsReportHeader } from './metricsReport/MetricsReportHeader'
import { ProgressGraph } from './progressGraph/ProgressGraph'

export const DailyReports = () => {
  return (
    <div>
      <ProgressGraph />
      <MetricsReportHeader />
      <MetricsReportButton onClick={() => ({})} />
    </div>
  )
}
