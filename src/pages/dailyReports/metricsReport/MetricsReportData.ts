import { SGLElectricIcon } from '@/components/UI/Icons/ElectricIcon/SGLElectricIcon'
import { SGLHeartIcon } from '@/components/UI/Icons/HeartIcon/SGLHeartIcon'
import { SGLPsychologyIcon } from '@/components/UI/Icons/psychology/SGLPsychologyIcon'
import { SGLCloudIcon } from '@/components/UI/Icons/CloudIcon/SGLCloudIcon'
import { SGLMoonIcon } from '@/components/UI/Icons/MoonIcon/SGLMoonIcon'
import { SGLSmileIcon } from '@/components/UI/Icons/SmileIcon/SGLSmileIcon'

export const PaletteColorKey = {
  Primary: 'primary',
  Secondary: 'secondary',
  Error: 'error',
  MidGrey: 'midGrey',
  Yellow: 'yellow',
  Green: 'green',
} as const

export const METRICS_REPORT_DATA = [
  {
    id: 'energyLevel',
    titleKey: 'metricCard.energyLevel',
    minLabelKey: 'metricCard.label.exhausted',
    maxLabelKey: 'metricCard.label.energetic',
    onChange: () => {},
    colorIcon: PaletteColorKey.Yellow,
    icon: SGLElectricIcon,
  },
  {
    id: 'sleepQuality',
    titleKey: 'metricCard.sleepQuality',
    minLabelKey: 'metricCard.label.poor',
    maxLabelKey: 'metricCard.label.excellent',
    onChange: () => {},
    colorIcon: PaletteColorKey.Primary,
    icon: SGLMoonIcon,
  },
  {
    id: 'painLevel',
    titleKey: 'metricCard.painLevel',
    minLabelKey: 'metricCard.label.severePain',
    maxLabelKey: 'metricCard.label.noPain',
    onChange: () => {},
    colorIcon: PaletteColorKey.Error,
    icon: SGLHeartIcon,
  },
  {
    id: 'concentration',
    titleKey: 'metricCard.concentration',
    minLabelKey: 'metricCard.label.difficultyConcentrating',
    maxLabelKey: 'metricCard.label.highlyFocused',
    onChange: () => {},
    colorIcon: PaletteColorKey.Secondary,
    icon: SGLPsychologyIcon,
  },
  {
    id: 'brainFog',
    titleKey: 'metricCard.brainFog',
    minLabelKey: 'metricCard.label.veryHeavy',
    maxLabelKey: 'metricCard.label.veryClear',
    onChange: () => {},
    colorIcon: PaletteColorKey.MidGrey,
    icon: SGLCloudIcon,
  },
  {
    id: 'mood',
    titleKey: 'metricCard.mood',
    minLabelKey: 'metricCard.label.low',
    maxLabelKey: 'metricCard.label.excellentState',
    onChange: () => {},
    colorIcon: PaletteColorKey.Green,
    icon: SGLSmileIcon,
  },
]
