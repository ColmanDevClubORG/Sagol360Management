import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import { StyledBadge } from './styles'

interface SGLBadgeProps {
  count: number
}

export const SGLBadge = ({ count }: SGLBadgeProps) => {
  return (
    <StyledBadge badgeContent={count}>
      <NotificationsNoneIcon />
    </StyledBadge>
  )
}
