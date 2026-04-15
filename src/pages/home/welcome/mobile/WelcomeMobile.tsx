import { SGLNotificationsBadgeIcon } from '@/components/UI/Icons/NotificationsBadge/SGLNotificationsBadgeIcon'
import { welcomeMobileStyles } from './styles'
import type { WelcomeProps } from '../types'
import { SplitTitle } from '../splitTitle/SpliteTitle'
import { useTranslation } from 'react-i18next'

export const WelcomeMobile = ({
  userName,
  notificationCount,
  onToggleDialog,
  styles,
}: WelcomeProps) => {
  const { t } = useTranslation()

  return (
    <div style={{ ...welcomeMobileStyles.container, ...styles }}>
      <SplitTitle
        firstChild={t('good night,')}
        secondChild={userName}
        firstVariant="mediumText"
        secondVariant="largeTitle"
        secondStyles={welcomeMobileStyles.secondChild}
        styles={welcomeMobileStyles.splitTitle}
      />
      <SGLNotificationsBadgeIcon notificationCount={notificationCount} onClick={onToggleDialog} />
    </div>
  )
}
