import { SGLNotificationsBadgeIcon } from '@/components/UI/Icons/NotificationsBadge/SGLNotificationsBadgeIcon'
import { DoubleTypography } from '../../doubleTypography/DoubleTypography'
import { welcomeDesktopStyles } from '../styles'
import type { CSSProperties } from 'react'

interface LogoProps {
  notificationCount: number
  onToggleDialog: () => void
  styles?: CSSProperties
}

export const Logo = ({ notificationCount, onToggleDialog, styles }: LogoProps) => {
  return (
    <div style={{ ...welcomeDesktopStyles.sections, ...styles }}>
      <SGLNotificationsBadgeIcon notificationCount={notificationCount} onClick={onToggleDialog} />
      <DoubleTypography
        firstChild={'Sagol'}
        secondChild={'360'}
        firstVariant="largeTitle"
        secondVariant="largeTitle"
        firstColor="purple.main"
        secondColor="orange.main"
      />
    </div>
  )
}
