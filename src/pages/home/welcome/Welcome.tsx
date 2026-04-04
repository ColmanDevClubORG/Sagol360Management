import { useState } from 'react'
import { WelcomeMobile } from './mobile/WelcomeMobile'
import { WelcomeDesktop } from './desktop/WelcomeDesktop'
import { SGLAlertDialog } from '@/components/UI/AlertDialog/SGLAlertDialog'
import { useIsMobile } from '@/hooks/useIsMobile'

export const Welcome = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useIsMobile()
  const toggleDialog = () => {
    setIsOpen((prev) => !prev)
  }

  const welcomeProps = {
    userName: 'ישראל',
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
