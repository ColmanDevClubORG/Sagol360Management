import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined'
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined'
import PsychologyOutloinedIcon from '@mui/icons-material/PsychologyOutlined'
import { MetricCard } from '../metricCard/MetricCard'
import { reportListCardStyle } from './style'

export const MetrcsReportListCard = () => {
  return (
    <div style={reportListCardStyle}>
      <MetricCard
        titleKey="metricCard.energyLevel"
        minLabelKey="metricCard.label.exhausted"
        maxLabelKey="metricCard.label.energetic"
        onChange={() => {}}
        colorIcon="yellow"
        icon={<ElectricBoltOutlinedIcon />}
      />
      <MetricCard
        titleKey="metricCard.sleepQuality"
        minLabelKey="metricCard.label.poor"
        maxLabelKey="metricCard.label.excellent"
        onChange={() => {}}
        icon={<DarkModeOutlinedIcon />}
        colorIcon="primary"
      />
      <MetricCard
        titleKey="metricCard.painLevel"
        minLabelKey="metricCard.label.severePain"
        maxLabelKey="metricCard.label.noPain"
        onChange={() => {}}
        icon={<FavoriteBorderOutlinedIcon />}
        colorIcon="error"
      />
      <MetricCard
        titleKey="metricCard.concentration"
        minLabelKey="metricCard.label.difficultyConcentrating"
        maxLabelKey="metricCard.label.highlyFocused"
        onChange={() => {}}
        icon={<PsychologyOutloinedIcon />}
        colorIcon="secondary"
      />
      <MetricCard
        titleKey="metricCard.brainFog"
        minLabelKey="metricCard.label.veryHeavy"
        maxLabelKey="metricCard.label.veryClear"
        onChange={() => {}}
        icon={<CloudOutlinedIcon />}
        colorIcon="midGrey"
      />
      <MetricCard
        titleKey="metricCard.mood"
        minLabelKey="metricCard.label.low"
        maxLabelKey="metricCard.label.excellentState"
        onChange={() => {}}
        icon={<SentimentSatisfiedAltOutlinedIcon />}
        colorIcon="green"
      />
    </div>
  )
}
