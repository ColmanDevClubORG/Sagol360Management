import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { SGLVideoCard } from '@/components/UI/Video/SGLVideoCard'
import { useTranslation } from 'react-i18next'
import { BalanceTraining } from '../balanceTraining/BalanceTraining'
import {
  rootStyle_desktop,
  conteiner_desktop,
  header_desktop,
  videoContainer_desktop,
} from './style'
import { BALANCE_VIDEO_TIME, STRETCH_VIDEO_TIME } from '@/constants'

export const RecomendationTrainingDesktop = () => {
  const { t } = useTranslation()

  return (
    <div style={rootStyle_desktop}>
      <div style={conteiner_desktop}>
        <div style={header_desktop}>
          <SGLTypography variant="mediumTitle" color="black">
            {t('lifeStyle.todayRecommendations')}
          </SGLTypography>
        </div>
        <div style={videoContainer_desktop}>
          <SGLVideoCard
            title={t('lifeStyle.morningStretchingTitle')}
            description={t('lifeStyle.morningStretchingDescription')}
            durationInMinutes={STRETCH_VIDEO_TIME}
          />
          <SGLVideoCard
            title={t('lifeStyle.balanceTrainingTitle')}
            description={t('lifeStyle.balanceTrainingDescription')}
            durationInMinutes={BALANCE_VIDEO_TIME}
          />
        </div>
      </div>
      <div style={conteiner_desktop}>
        <div style={header_desktop}>
          <SGLTypography variant="mediumTitle" color="black">
            {t('lifeStyle.balanceExercises')}
          </SGLTypography>
        </div>
        <div>
          <BalanceTraining />
        </div>
      </div>
    </div>
  )
}
