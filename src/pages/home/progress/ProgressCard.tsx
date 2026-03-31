import * as styles from './styles'
import { SGLCard } from '../../../components/UI/Card/SGLCard'
import { SGLCircularProgress } from '../../../components/UI/Progress/SGLCircularProgress'
import { useIsMobile } from '@/hooks/useIsMobile'
import { ProgressLabel } from './ProgressLabel'
import { ProgressCardText } from './ProgressCardText'

export type VariantStyle = (typeof styles.variantStyles)['mobile' | 'desktop']

interface ProgressCardProps {
  value: number
}

export const ProgressCard = ({ value }: ProgressCardProps) => {
  const isMobile = useIsMobile()
  const s = styles.variantStyles[isMobile ? 'mobile' : 'desktop']

  return (
    <SGLCard variant={s.card} style={styles.cardStyle}>
      <ProgressCardText s={s} />

      <SGLCircularProgress
        value={value}
        style={s.progress}
        size={75}
        label={<ProgressLabel value={value} s={s} />}
      />
    </SGLCard>
  )
}
