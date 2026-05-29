import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { SGLVideoCard } from '@/components/UI/Video/SGLVideoCard'
import { useTranslation } from 'react-i18next'
import { BalanceTraining } from '../balanceTraining/BalanceTraining'
import {
  rootStyle_mobile,
  rootStyle_desktop,
  videoConteiner_desktop,
  header_desktop,
} from './style'
import { useIsMobile } from '@/hooks/useIsMobile'

export const RecomendationTraining = () => {
  const { t } = useTranslation()
  const isMobile = useIsMobile()

  return (
    <>
      {isMobile ? (
        <div style={rootStyle_mobile}>
          <SGLTypography variant="mediumTitle" color="black">
            {t('lifeStyle.todayRecommendations')}
          </SGLTypography>
          <SGLVideoCard
            title={t('lifeStyle.morningStretchingTitle')}
            description={t('lifeStyle.morningStretchingDescription')}
            durationInMinutes={10}
          />
          <SGLVideoCard
            title={t('lifeStyle.balanceTrainingTitle')}
            description={t('lifeStyle.balanceTrainingDescription')}
            durationInMinutes={15}
          />
          <SGLTypography variant="mediumTitle" color="black">
            {t('lifeStyle.balanceExercises')}
          </SGLTypography>
          <BalanceTraining />
        </div>
      ) : (
        <div style={rootStyle_desktop}>
          <div>
            <div style={header_desktop}>
              <SGLTypography variant="mediumTitle" color="black">
                {t('lifeStyle.todayRecommendations')}
              </SGLTypography>
            </div>
            <div style={videoConteiner_desktop}>
              <SGLVideoCard
                title={t('lifeStyle.morningStretchingTitle')}
                description={t('lifeStyle.morningStretchingDescription')}
                durationInMinutes={10}
              />
              <SGLVideoCard
                title={t('lifeStyle.balanceTrainingTitle')}
                description={t('lifeStyle.balanceTrainingDescription')}
                durationInMinutes={15}
              />
            </div>
          </div>
          <div>
            <div style={header_desktop}>
              <SGLTypography variant="mediumTitle" color="black">
                {t('lifeStyle.balanceExercises')}
              </SGLTypography>
            </div>
            <div style={videoConteiner_desktop}>
              <BalanceTraining />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
