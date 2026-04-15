import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import { bellStyle, anchorOrigin, messageStyle } from './styles'

type SGLBadgeProps = {
  count?: number
}

export const SGLBadge = ({ count = 0 }: SGLBadgeProps) => {
  return (
    <Badge badgeContent={count} sx={messageStyle} anchorOrigin={anchorOrigin}>
      <NotificationsNoneIcon sx={bellStyle} />
    </Badge>
  )
}
