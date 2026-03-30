import type { WelcomeProps } from '../types'
import { welcomeDesktopStyles } from './styles'
import { Logo } from './Logo/Logo'
import { UserGreeting } from './userGreetings/UserGreeting'

export const WelcomeDesktop = ({
  userName,
  notificationCount,
  onToggleDialog,
  styles,
}: WelcomeProps) => {
  return (
    <div style={{ ...welcomeDesktopStyles.container, ...styles }}>
      <Logo notificationCount={notificationCount} onToggleDialog={onToggleDialog} />
      <UserGreeting userName={userName} />
    </div>
  )
}
