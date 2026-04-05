import { LineChart, type LineChartProps } from '@mui/x-charts/LineChart'
import { progressGraphSlotProps, progressGraphStyles, chartAxesConfig } from './styles'

interface SGLProgressGraphProps extends Omit<LineChartProps, 'xAxis' | 'yAxis'> {
  xAxisData: string[]
}

export const SGLProgressGraph = ({ xAxisData, series, ...props }: SGLProgressGraphProps) => {
  return (
    <LineChart
      {...props}
      series={series}
      xAxis={[{ ...chartAxesConfig.xAxis, data: xAxisData }]}
      yAxis={[{ ...chartAxesConfig.yAxis }]}
      sx={progressGraphStyles}
      slotProps={progressGraphSlotProps}
      disableAxisListener
    />
  )
}
