import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import { StyledBadge } from './styles'
import { SGLTypography } from '../../Typography/SGLTypography'

interface SGLBadgeProps {
  count: number
}

export const SGLBadge = ({ count }: SGLBadgeProps) => {
  return (
    <StyledBadge badgeContent={<SGLTypography variant="smallText">{count}</SGLTypography>}>
      <NotificationsNoneIcon />
    </StyledBadge>
  )
}
