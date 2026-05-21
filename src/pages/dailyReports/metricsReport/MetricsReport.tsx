import { MetricsReportListCard } from './MetricsReportListCard'
import { MetricsReportButton } from './MetricsReportButton'
import { MetricsReportHeader } from './MetricsReportHeader'
import { rootStyle } from './style'
import { useTheme } from '@mui/material'
import { useMetricsReport } from '@/hooks/useMetricsReport'
import { useState } from 'react'

export const MetricsReport = () => {
  const theme = useTheme()
  const [metrics, setMetrics] = useState({
    energyLevel: 1,
    sleepQuality: 1,
    painLevel: 1,
    concentration: 1,
    brainFog: 1,
    mood: 1,
  })
  const { sentToday, submitReport } = useMetricsReport()
  const handleChange = (id: string, value: number) => {
    setMetrics((prev) => ({ ...prev, [id]: value }))
  }

  return (
    <div style={rootStyle(theme)}>
      <MetricsReportHeader />
      <MetricsReportListCard onChange={handleChange} />
      <MetricsReportButton onClick={() => submitReport(metrics)} sentToday={sentToday ?? false} />
    </div>
  )
}
