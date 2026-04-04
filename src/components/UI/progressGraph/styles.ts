import type { LineChartProps } from '@mui/x-charts'

export const progressGraphStyles = {
  '& .MuiChartsLegend-series': {
    flexDirection: 'row-reverse',
  },

  '& .MuiChartsLegend-label': {
    fontSize: '0.9rem',
    color: 'midGrey.main',
  },

  '& .MuiLineElement-root': {
    strokeWidth: '0.25rem',
  },

  '& .MuiChartsAxis-tickLabel': {
    color: 'midGrey.main',
    fill: 'currentColor !important',
  },
}
export const progressGraphSlotProps: LineChartProps['slotProps'] = {
  legend: {
    position: {
      vertical: 'bottom',
    },
  },
}
