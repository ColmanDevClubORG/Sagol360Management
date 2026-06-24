import { ProgressCard } from '@/pages/home/progress/ProgressCard'
import { DailyTips } from './dailyTips/DailyTips'
import { CheckIn } from './checkIn/CheckIn'
import { HomeButtomDesktop, HomeButtomMobile, HomeTopDesktop, HomeTopMobile } from './styles'
import { SGLBrainHQ } from '@/components/BrainHQ/SGLBrainHQ'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { useTranslation } from 'react-i18next'
import { useIsMobile } from '@/hooks/useIsMobile'
import { Welcome } from './welcome/Welcome'
import { AppointmentBottomSheet } from './AppointmentBottomSheet/AppointmentBottomSheet'

export const Home = () => {
  const { t } = useTranslation()
  const isMobile = useIsMobile()

  return (
    <>
      <AppointmentBottomSheet />
      <div style={isMobile ? HomeTopMobile : HomeTopDesktop}>
        <Welcome />
        <ProgressCard value={10} />
        {isMobile ? <CheckIn /> : undefined}
      </div>
      <div style={isMobile ? HomeButtomMobile : HomeButtomDesktop}>
        <SGLBrainHQ />
        {isMobile ? (
          <SGLTypography variant="mediumTitle">{t('daily.tip')}</SGLTypography>
        ) : undefined}
        <DailyTips />
      </div>
    </>
  )
}
