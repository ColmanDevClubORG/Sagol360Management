import { SGLNotificationsBadgeIcon } from '@/components/UI/Icons/NotificationsBadge/SGLNotificationsBadgeIcon'
import { welcomeMobileStyles } from './styles'
import type { WelcomeProps } from '../types'
import { DoubleTypography } from '../doubleTypography/DoubleTypography'

export const WelcomeMobile = ({
  userName,
  notificationCount,
  onToggleDialog,
  styles,
}: WelcomeProps) => {
  return (
    <div style={{ ...welcomeMobileStyles, ...styles }}>
      <DoubleTypography
        firstChild="good night,"
        secondChild={userName}
        firstVariant="mediumText"
        secondVariant="largeTitle"
        secondColor="purple.main"
        styles={{ flexDirection: 'column', alignItems: 'flex-start' }}
      />
      <SGLNotificationsBadgeIcon notificationCount={notificationCount} onClick={onToggleDialog} />
    </div>
  )
}
