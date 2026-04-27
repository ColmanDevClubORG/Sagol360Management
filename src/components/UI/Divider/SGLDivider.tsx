import type { ReactNode } from 'react'
import { Box, LinearProgress, useTheme } from '@mui/material'
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
  const theme = useTheme()

  return (
    <Box sx={dividerStyles.container}>
      <Box sx={dividerStyles.header}>
        <SGLTypography variant="smallTitle" color="secondary.main">
          {value}
        </SGLTypography>
        <Box sx={dividerStyles.headerRight}>
          <SGLTypography variant="smallTitle">{label}</SGLTypography>
          {icon && <Box>{icon}</Box>}
        </Box>
      </Box>

      <LinearProgress
        variant="determinate"
        value={100 - percent}
        sx={dividerStyles.getProgress(theme)}
      />

      <Box sx={dividerStyles.footer}>
        <SGLTypography variant="smallText">{lowLabel}</SGLTypography>
        <SGLTypography variant="smallText">{highLabel}</SGLTypography>
      </Box>
    </Box>
  )
}
