import { SGLCircleIcon } from '@/components/UI/Icons/Circle/SGLCircleIcon'

interface GraphInputData {
  xLabels: string[]
  minY: number
  maxY: number
  seriesData: {
    labelKey: string
    data: number[]
    color: string
  }[]
}

export const getGraphData = (t: (key: string) => string, input: GraphInputData) => ({
  xAxis: [
    {
      data: input.xLabels,
      scaleType: 'point' as const,
      disableLine: true,
      disableTicks: true,
    },
  ],
  yAxis: [
    {
      min: input.minY,
      max: input.maxY,
      disableLine: true,
      disableTicks: true,
    },
  ],
  series: input.seriesData.map((s) => ({
    label: t(s.labelKey),
    data: s.data,
    color: s.color,
    curve: 'natural' as const,
    labelMarkType: SGLCircleIcon,
  })),
})
