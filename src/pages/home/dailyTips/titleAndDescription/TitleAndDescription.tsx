import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { titleAndDescriptionStyles } from './styles'
import { useDailyTip } from '@/hooks/useDailyTip'

export const TitleAndDescription = () => {
  const { tip, isLoading, error } = useDailyTip()

  if (isLoading) return null
  if (error || !tip) return null

  return (
    <>
      <SGLTypography variant="smallTitle" styles={titleAndDescriptionStyles.title}>
        {tip.title}
      </SGLTypography>
      <SGLTypography variant="smallText" styles={titleAndDescriptionStyles.description}>
        {tip.description}
      </SGLTypography>
    </>
  )
}
