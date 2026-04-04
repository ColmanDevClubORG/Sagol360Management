import { LineChart, type LineChartProps } from '@mui/x-charts/LineChart'
import type { SxProps, Theme } from '@mui/material'
import { progressGraphSlotProps, progressGraphStyles } from './styles'

interface SGLProgressGraphProps extends LineChartProps {
  sx?: SxProps<Theme>
}
export const SGLProgressGraph = ({ sx, ...props }: SGLProgressGraphProps) => {
  return (
    <LineChart
      sx={{ ...progressGraphStyles, ...sx }}
      {...props}
      slotProps={{
        ...progressGraphSlotProps,
      }}
    />
  )
}
