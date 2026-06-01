import { useIsMobile } from '@/hooks/useIsMobile'
import { RecomendationTrainingMobile } from './RecomendationTrainingMobile'
import { RecomendationTrainingDesktop } from './RecomendationTrainingDesktop'
export const RecomendationTraining = () => {
  const isMobile = useIsMobile()

  return <>{isMobile ? <RecomendationTrainingMobile /> : <RecomendationTrainingDesktop />}</>
}
