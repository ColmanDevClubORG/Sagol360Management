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
  const specificVariantStyle = styles.variantStyles[isMobile ? 'mobile' : 'desktop']

  return (
    <SGLCard variant={specificVariantStyle.card} style={styles.cardStyle}>
      <ProgressCardText s={specificVariantStyle} />

      <SGLCircularProgress
        value={value}
        style={specificVariantStyle.progress}
        size={75}
        label={<ProgressLabel value={value} style={specificVariantStyle} />}
      />
    </SGLCard>
  )
}
