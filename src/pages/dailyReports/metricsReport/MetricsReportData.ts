import { SGLElectricIcon } from '@/components/UI/Icons/ElectricIcon/SGLElectricIcon'
import { SGLHeartIcon } from '@/components/UI/Icons/HeartIcon/SGLHeartIcon'
import { SGLPsychologyIcon } from '@/components/UI/Icons/psychology/SGLPsychologyIcon'
import { SGLCloudIcon } from '@/components/UI/Icons/CloudIcon/SGLCloudIcon'
import { SGLMoonIcon } from '@/components/UI/Icons/MoonIcon/SGLMoonIcon'
import { SGLSmileIcon } from '@/components/UI/Icons/SmileIcon/SGLSmileIcon'

export const MetricsReportData = [
  {
    titleKey: 'metricCard.energyLevel',
    minLabelKey: 'metricCard.label.exhausted',
    maxLabelKey: 'metricCard.label.energetic',
    onChange: () => {},
    colorIcon: 'yellow',
    icon: SGLElectricIcon,
  },
  {
    titleKey: 'metricCard.sleepQuality',
    minLabelKey: 'metricCard.label.poor',
    maxLabelKey: 'metricCard.label.excellent',
    onChange: () => {},
    colorIcon: 'primary',
    icon: SGLMoonIcon,
  },
  {
    titleKey: 'metricCard.painLevel',
    minLabelKey: 'metricCard.label.severePain',
    maxLabelKey: 'metricCard.label.noPain',
    onChange: () => {},
    colorIcon: 'error',
    icon: SGLHeartIcon,
  },
  {
    titleKey: 'metricCard.concentration',
    minLabelKey: 'metricCard.label.difficultyConcentrating',
    maxLabelKey: 'metricCard.label.highlyFocused',
    onChange: () => {},
    colorIcon: 'secondary',
    icon: SGLPsychologyIcon,
  },
  {
    titleKey: 'metricCard.brainFog',
    minLabelKey: 'metricCard.label.veryHeavy',
    maxLabelKey: 'metricCard.label.veryClear',
    onChange: () => {},
    colorIcon: 'midGrey',
    icon: SGLCloudIcon,
  },
  {
    titleKey: 'metricCard.mood',
    minLabelKey: 'metricCard.label.low',
    maxLabelKey: 'metricCard.label.excellentState',
    onChange: () => {},
    colorIcon: 'green',
    icon: SGLSmileIcon,
  },
]
