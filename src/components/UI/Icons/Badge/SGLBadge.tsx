import React from 'react';
import Badge from '@mui/material/Badge';
import { SGLTypography } from '../../Typography/SGLTypography';
import { bellStyle, anchorOrigin } from './styles';

type SGLBadgeProps = {
  count: number;
  children: React.ReactNode;
};

export const SGLBadge = ({ count, children }: SGLBadgeProps) => {
  return (
    <Badge
      badgeContent={
        <span style={{ display: 'flex' }}>
          <SGLTypography variant="smallText" color="common.white">
            {count}
          </SGLTypography>
        </span>
      }
      sx={bellStyle}
      anchorOrigin={anchorOrigin}
    >
      {children}
    </Badge>
  );
};