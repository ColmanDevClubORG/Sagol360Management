import { SGLAvatar } from '@/components/UI/Icons/Avatar/SGLAvatar'
import { DoubleTypography } from '../../doubleTypography/DoubleTypography'
import { welcomeDesktopStyles } from '../styles'
import type { CSSProperties } from '@mui/material'

interface UserGreetingProps {
  userName: string
  styles?: CSSProperties
}

export const UserGreeting = ({ userName, styles }: UserGreetingProps) => {
  const avatarText = userName.slice(0, 2)

  return (
    <div style={{ ...welcomeDesktopStyles.sections, ...styles }}>
      <DoubleTypography
        firstChild={'good night,'}
        secondChild={`${userName} 👋`}
        firstVariant="smallText"
        secondVariant="smallTitle"
        styles={{ gap: '4px' }}
      />
      <SGLAvatar styles={{ backgroundColor: 'purple.main' }}>{avatarText}</SGLAvatar>
    </div>
  )
}
