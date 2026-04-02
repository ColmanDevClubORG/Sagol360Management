import { SGLCard } from '../UI/Card/SGLCard'
import { BrainButton } from './button/BrainButton'
import { brainHqStyles } from './styles'
import { BrainMinutesStats } from './minutesStats/BrainMinutesStats'
import { BrainTitleMobile } from './mobile/title/BrainTitleMobile'
import { useIsMobile } from '@/hooks/useIsMobile'
import { BrainTitleDesktop } from './desktop/title/BrainTitleDesktop'
import { BrainPropgress } from './progress/BrainPropgress'

export const SGLBrainHQ = () => {
  const isMobile = useIsMobile()
  const progress = 15 //should come from DB
  return (
    <SGLCard variant="orange" style={brainHqStyles.container}>
      <div style={brainHqStyles.textContainer}>
        {isMobile ? <BrainTitleMobile /> : <BrainTitleDesktop />}
        <BrainMinutesStats current={progress} />
      </div>
      <BrainPropgress progress={progress} />
      <BrainButton />
    </SGLCard>
  )
}
