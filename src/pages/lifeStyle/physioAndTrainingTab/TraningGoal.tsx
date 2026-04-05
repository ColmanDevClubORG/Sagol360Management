import { useTranslation } from 'react-i18next'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { SGLLinearProgress } from '@/components/UI/Progress/SGLLinearProgress'
import { trainingGoalStyles } from './styles'

export const TrainingGoal = () => {
  const { t } = useTranslation()
  const goalMinutes = 20

  return (
    <div style={trainingGoalStyles.container}>
      <div style={trainingGoalStyles.textContainer}>
        <SGLTypography variant="mediumTitle" styles={trainingGoalStyles.title}>
          {t('goal.minutes', { count: goalMinutes })}
        </SGLTypography>
        <SGLTypography variant="smallText">{t('daily.activity.goal')}</SGLTypography>
      </div>
      <SGLLinearProgress value={60} style={trainingGoalStyles.linearProgress} />
    </div>
  )
}
