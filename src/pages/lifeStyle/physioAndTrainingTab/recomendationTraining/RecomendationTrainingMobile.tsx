import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { SGLVideoCard } from '@/components/UI/Video/SGLVideoCard'
import { useTranslation } from 'react-i18next'
import { BalanceTraining } from '../balanceTraining/BalanceTraining'
import { rootStyleMobile } from './style'
import { BALANCE_VIDEO_TIME, STRETCH_VIDEO_TIME } from '@/constants'

export const RecomendationTrainingMobile = () => {
  const { t } = useTranslation()

  return (
    <>
      <div style={rootStyleMobile}>
        <SGLTypography variant="mediumTitle" color="black">
          {t('lifeStyle.todayRecommendations')}
        </SGLTypography>
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
        <SGLTypography variant="mediumTitle" color="black">
          {t('lifeStyle.balanceExercises')}
        </SGLTypography>
        <BalanceTraining />
      </div>
    </>
  )
}
