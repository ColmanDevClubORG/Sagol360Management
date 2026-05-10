import { MetricsReportListCard } from './MetricsReportListCard'
import { MetricsReportButton } from './MetricsReportButton'
import { MetricsReportHeader } from './MetricsReportHeader'
import { rootStyle } from './style'
import { useTheme } from '@mui/material'

interface MetricsReportProps {
  onClick: () => void
}

export const MetricsReport = ({ onClick }: MetricsReportProps) => {
  const theme = useTheme()
  return (
    <div style={rootStyle(theme)}>
      <MetricsReportHeader />
      <MetricsReportListCard />
      <MetricsReportButton onClick={onClick} />
    </div>
  )
}
