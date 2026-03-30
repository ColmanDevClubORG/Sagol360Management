import { SGLAvatar } from '@/components/UI/Icons/Avatar/SGLAvatar'
import { welcomeDesktopStyles } from '../styles'
import type { CSSProperties } from '@mui/material'
import { SplitTitle } from '../../splitTitle/SpliteTitle'

interface UserGreetingProps {
  userName: string
  styles?: CSSProperties
}

export const UserGreeting = ({ userName, styles }: UserGreetingProps) => {
  const avatarText = userName.slice(0, 2)

  return (
    <div style={{ ...welcomeDesktopStyles.sections, ...styles }}>
      <SplitTitle
        firstChild={'good night,'}
        secondChild={`${userName} 👋`}
        firstVariant="smallText"
        secondVariant="smallTitle"
      />
      <SGLAvatar styles={{ backgroundColor: 'purple.main' }}>{avatarText}</SGLAvatar>
    </div>
  )
}
