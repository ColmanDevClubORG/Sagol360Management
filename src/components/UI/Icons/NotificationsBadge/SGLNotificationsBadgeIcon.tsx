import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import { Badge, type BadgeProps as MuiBadgeProps } from '@mui/material'
import { notificationsStyles } from './styles'
import type { CSSProperties } from 'react'

interface SGLNotificationsBadgeProps extends Omit<MuiBadgeProps, 'onClick'> {
  onClick?: () => void
  notificationCount?: number
  iconSize?: 'small' | 'medium' | 'large'
  colorVariant?: 'primary' | 'success' | 'error'
  styles?: CSSProperties
}

export const SGLNotificationsBadgeIcon = ({
  notificationCount,
  styles,
  onClick,
  iconSize = 'medium',
  colorVariant = 'error',
  ...props
}: SGLNotificationsBadgeProps) => {
  return (
    <Badge
      badgeContent={notificationCount}
      color={colorVariant}
      anchorOrigin={{
        horizontal: 'left',
      }}
      onClick={onClick}
      sx={{ ...notificationsStyles.wrapper, ...styles }}
      {...props}
    >
      <NotificationsOutlinedIcon sx={notificationsStyles.icon} fontSize={iconSize} />
    </Badge>
  )
}
