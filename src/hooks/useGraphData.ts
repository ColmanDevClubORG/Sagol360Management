import { useTranslation } from 'react-i18next'
import { SGLCircleIcon } from '@/components/UI/Icons/Circle/SGLCircleIcon'

interface SeriesInput {
  labelKey: string
  data: number[]
  color: string
}

export const useGraphData = (input: { xLabels: string[]; seriesData: SeriesInput[] }) => {
  const { t } = useTranslation()

  const formatSeries = (s: SeriesInput) => ({
    label: t(s.labelKey),
    data: s.data,
    color: s.color,
    curve: 'natural' as const,
    labelMarkType: SGLCircleIcon,
  })

  return {
    xAxisData: input.xLabels,
    series: input.seriesData.map(formatSeries),
  }
}
