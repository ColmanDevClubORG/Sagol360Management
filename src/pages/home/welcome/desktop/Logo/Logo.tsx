import { SGLNotificationsBadgeIcon } from '@/components/UI/Icons/NotificationsBadge/SGLNotificationsBadgeIcon'
import { welcomeDesktopStyles } from '../styles'
import type { CSSProperties } from 'react'
import { SplitTitle } from '../../splitTitle/SpliteTitle'

interface LogoProps {
  notificationCount: number
  onToggleDialog: () => void
  styles?: CSSProperties
}

export const Logo = ({ notificationCount, onToggleDialog, styles }: LogoProps) => {
  return (
    <div style={{ ...welcomeDesktopStyles.sections, ...styles }}>
      <SGLNotificationsBadgeIcon notificationCount={notificationCount} onClick={onToggleDialog} />
      <SplitTitle
        firstChild={'Sagol'}
        secondChild={'360'}
        firstVariant="largeTitle"
        secondVariant="largeTitle"
        firstStyles={welcomeDesktopStyles.fisrtChild}
        secondStyles={welcomeDesktopStyles.secondChild}
      />
    </div>
  )
}
