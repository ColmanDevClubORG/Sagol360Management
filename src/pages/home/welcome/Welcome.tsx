import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { WelcomeMobile } from './mobile/WelcomeMobile'
import { WelcomeDesktop } from './desktop/WelcomeDesktop'
import { SGLAlertDialog } from '@/components/UI/AlertDialog/SGLAlertDialog'
import { useIsMobile } from '@/hooks/useIsMobile'
import { apiService } from '@/services/api/api.service'
import { API_ENDPOINTS } from '@/constants/api.constants'

//TODO: remove hardcoded user and get it from the login
const PATIENT_ID = '1622017'

export const Welcome = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useIsMobile()
  const toggleDialog = () => {
    setIsOpen((prev) => !prev)
  }

  const { data: patient } = useQuery({
    queryKey: ['patient', PATIENT_ID],
    queryFn: () => apiService.get<{ firstName: string }>(`${API_ENDPOINTS.patient}${PATIENT_ID}`),
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
