import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { WelcomeMobile } from './mobile/WelcomeMobile'
import { WelcomeDesktop } from './desktop/WelcomeDesktop'
import { SGLAlertDialog } from '@/components/UI/AlertDialog/SGLAlertDialog'
import { useIsMobile } from '@/hooks/useIsMobile'
import { apiService } from '@/services/api/api.service'

const PATIENT_ID = '1622017'

interface PatientResponse {
  patientId: string
  firstName: string
  totalProtocolTreatments: number
  currentTreatmentNumber: number
}

export const Welcome = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useIsMobile()
  const toggleDialog = () => {
    setIsOpen((prev) => !prev)
  }

  const { data: patient } = useQuery({
    queryKey: ['patient', PATIENT_ID],
    queryFn: () => apiService.get<PatientResponse>(`/api/patients/${PATIENT_ID}`),
  })

  const welcomeProps = {
    userName: patient?.firstName ?? '',
    notificationCount: 2,
    onToggleDialog: toggleDialog,
  }

  return (
    <>
      {isMobile ? <WelcomeMobile {...welcomeProps} /> : <WelcomeDesktop {...welcomeProps} />}
      <SGLAlertDialog isOpen={isOpen} onClose={toggleDialog} />
    </>
  )
}
