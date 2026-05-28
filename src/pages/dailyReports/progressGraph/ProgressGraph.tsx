import { SGLProgressGraph } from '@/components/UI/progressGraph/SGLProgressGraph'
import { progressGraphStyles } from './styles'
import { useTranslation } from 'react-i18next'
import { SGLFilterHeader } from '@/components/UI/FilterHeader/SGLFilterHeader'
import { useGraphData } from '@/hooks/useGraphData'
import { useTheme } from '@mui/material'

export const ProgressGraph = () => {
  const { t } = useTranslation()
  const theme = useTheme()

  const MOCK_GRAPH_DATA = {
    xLabels: t('charts.days', { returnObjects: true }) as string[],
    seriesData: [
      {
        labelKey: 'charts.sleepQuality',
        data: [6.2, 5.8, 2, 8.1, 6.5, 7.2, 8.3],
        color: '#00E676',
      },
      {
        labelKey: 'charts.energyLevel',
        data: [5.5, 5, 6.8, 9.5, 4, 6.5, 2],
        color: '#8b2cf5',
      },
    ],
  } //TODO should come from DB

  const graphData = useGraphData(MOCK_GRAPH_DATA)

  return (
    <div style={progressGraphStyles(theme).container}>
      <SGLFilterHeader
        styles={progressGraphStyles(theme).header}
        title={t('charts.weeklyTrends')}
        options={[t('charts.last7Days')]}
      />
      <div style={progressGraphStyles(theme).chartWrapper}>
        <SGLProgressGraph {...graphData} />
      </div>
    </div>
  )
}
