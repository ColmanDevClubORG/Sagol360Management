import type { ReactNode } from 'react'
import { Box, LinearProgress } from '@mui/material'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { dividerStyles } from './styles'

interface SGLDividerProps {
  label: string
  value: string
  percent: number
  lowLabel: string
  highLabel: string
  icon?: ReactNode
}

export const SGLDivider = ({
  label,
  value,
  percent,
  lowLabel,
  highLabel,
  icon,
}: SGLDividerProps) => {
  return (
    <Box sx={dividerStyles.container}>
      <Box sx={dividerStyles.header}>
        <SGLTypography color="purple.main" styles={{ fontWeight: 700 }}>
          {value}
        </SGLTypography>
        <Box sx={dividerStyles.headerRight}>
          <SGLTypography styles={{ fontWeight: 700 }}>{label}</SGLTypography>
          {icon && <Box sx={dividerStyles.icon}>{icon}</Box>}
        </Box>
      </Box>

      <LinearProgress variant="determinate" value={percent} sx={dividerStyles.progress} />

      <Box sx={dividerStyles.footer}>
        <SGLTypography color="midGrey.main" styles={{ fontSize: '12px' }}>
          {lowLabel}
        </SGLTypography>
        <SGLTypography color="midGrey.main" styles={{ fontSize: '12px' }}>
          {highLabel}
        </SGLTypography>
      </Box>
    </Box>
  )
}
