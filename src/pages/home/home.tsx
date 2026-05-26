import { useState } from 'react'
import { ProgressCard } from '@/pages/home/progress/ProgressCard'
import { BottomSheetDialog } from '@/components/BottomSheetDialog/BottomSheetDialog'
import type { Appointment } from '@/components/BottomSheetDialog/types'
import { DailyTips } from './dailyTips/DailyTips'
import { CheckIn } from './checkIn/CheckIn'
import { HomeButtomDesktop, HomeButtomMobile, HomeTopDesktop, HomeTopMobile } from './styles'
import { SGLBrainHQ } from '@/components/BrainHQ/SGLBrainHQ'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { useTranslation } from 'react-i18next'
import { useIsMobile } from '@/hooks/useIsMobile'
import { Welcome } from './welcome/Welcome'

export const Home = () => {
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | undefined>({
    appointmentId: '1',
    patientId: 1622017,
    time: '10:12:50',
    date: '2026-05-15',
    chamber: 'appointment.chamber.hyperbaric',
    chairNumber: 9,
    treatmentNumber: 2,
    status: 'confirmed',
  })

  const { t } = useTranslation()
  const isMobile = useIsMobile()

  return (
    <>
      <BottomSheetDialog
        appointment={selectedAppointment}
        isOpen={!!selectedAppointment}
        onClose={() => setSelectedAppointment(undefined)}
      />
      <Welcome />
      <div style={isMobile ? HomeTopMobile : HomeTopDesktop}>
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
