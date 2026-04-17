import React from 'react'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import { SGLTypography } from '../../Typography/SGLTypography'
import { bellStyle, anchorOrigin, messageStyle } from './styles'

type SGLBadgeProps = {
  count?: number
}

export const SGLBadge = ({ count = 0 }: SGLBadgeProps) => {
  return (
    <Badge 
      badgeContent={
        <SGLTypography variant="smallText" color="common.white">
          {count}
        </SGLTypography>
      } 
      sx={messageStyle} 
      anchorOrigin={anchorOrigin}
      showZero={false}
    >
      <NotificationsNoneIcon sx={bellStyle} />
    </Badge>
  )
}