import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { SGLVideoCard } from '@/components/UI/Video/SGLVideoCard'
import { useTranslation } from 'react-i18next'
import { BalanceTraining } from '../balanceTraining/BalanceTraining'
import { rootStyleDesktop, conteinerDesktop, headerDesktop, videoContainerDesktop } from './style'
import { BALANCE_VIDEO_TIME, STRETCH_VIDEO_TIME } from '@/constants'

export const RecomendationTrainingDesktop = () => {
  const { t } = useTranslation()

  return (
    <div style={rootStyleDesktop}>
      <div style={conteinerDesktop}>
        <div style={headerDesktop}>
          <SGLTypography variant="mediumTitle" color="black">
            {t('lifeStyle.todayRecommendations')}
          </SGLTypography>
        </div>
        <div style={videoContainerDesktop}>
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
      <div style={conteinerDesktop}>
        <div style={headerDesktop}>
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
