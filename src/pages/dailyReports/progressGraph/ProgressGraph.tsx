import { SGLProgressGraph } from '@/components/UI/progressGraph/SGLProgressGraph'
import { GraphHeader } from './header/graphHeader'
import { progressGraphStyles } from './styles'
import { useTranslation } from 'react-i18next'
import { getGraphData } from './utils/GetGraphData'
export const ProgressGraph = () => {
  const { t } = useTranslation()

  const dynamicData = {
    xLabels: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "ש'"],
    minY: 0,
    maxY: 10,
    seriesData: [
      {
        labelKey: 'charts.sleepQuality',
        data: [6.2, 5.8, 7.5, 8.1, 6.5, 7.2, 8.3],
        color: '#00E676',
      },
      {
        labelKey: 'charts.energyLevel',
        data: [5.5, 2, 6.8, 9.5, 4, 6.5, 2],
        color: '#8b2cf5',
      },
    ],
  } //TODO should come from DB

  const graphData = getGraphData(t, dynamicData)

  return (
    <div style={progressGraphStyles.container}>
      <GraphHeader />
      <div style={progressGraphStyles.chartWrapper}>
        <SGLProgressGraph {...graphData} />
      </div>
    </div>
  )
}
