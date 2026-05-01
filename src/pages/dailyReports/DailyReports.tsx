import { MetricsReport } from './metricsReport/MetricsReport'
import { ProgressGraph } from './progressGraph/ProgressGraph'

export const DailyReports = () => {
  return (
    <div>
      <ProgressGraph />
      <MetricsReport onClick={() => {}} />
    </div>
  )
}
