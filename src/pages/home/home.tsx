import { useQuery } from '@tanstack/react-query'
import { ProgressCard } from '@/pages/home/progress/ProgressCard'
import { BottomSheetDialog } from '@/components/BottomSheetDialog/BottomSheetDialog'
import { DailyTips } from './dailyTips/DailyTips'
import { CheckIn } from './checkIn/CheckIn'
import { HomeButtomDesktop, HomeButtomMobile, HomeTopDesktop, HomeTopMobile } from './styles'
import { SGLBrainHQ } from '@/components/BrainHQ/SGLBrainHQ'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { useTranslation } from 'react-i18next'
import { useIsMobile } from '@/hooks/useIsMobile'
import { Welcome } from './welcome/Welcome'
import { apiService } from '@/services/api/api.service'
import { useState } from 'react'
import type { Appointment } from '@/components/BottomSheetDialog/types'

export const Home = () => {
  const [selectedAppointment, setSelectedAppointment] = useState<boolean>(true)

  const patientID = '1622017'
  const date = '07-06-2026'

  const { data: appointment } = useQuery({
    queryKey: ['nextAppointment', patientID, date],
    queryFn: async () => {
      const response = await apiService.get<Appointment>('/api/appointment/nextAppointment', {
        params: {
          patientID,
          date,
        },
      })
      return response
    },
  })

  const { t } = useTranslation()
  const isMobile = useIsMobile()

  return (
    <>
      <BottomSheetDialog
        appointment={appointment}
        isOpen={selectedAppointment && !!appointment}
        onClose={() => setSelectedAppointment(false)}
      />
      <div style={isMobile ? HomeTopMobile : HomeTopDesktop}>
        <Welcome />
        <ProgressCard value={10} />
        {isMobile ? <CheckIn onDone={() => {}} /> : undefined}
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
