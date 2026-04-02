import { SGLLinearProgress } from '@/components/UI/Progress/SGLLinearProgress'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { brainHqStyles } from '../styles'
import { useTranslation } from 'react-i18next'
import { useIsMobile } from '@/hooks/useIsMobile'
import { brainProgressStyles } from './styles'
interface brainProgressProps {
  progress: number
}

export const BrainPropgress = ({ progress }: brainProgressProps) => {
  const { t } = useTranslation()
  const isMobile = useIsMobile()
  return (
    <div>
      {!isMobile && (
        <SGLTypography variant="smallText" styles={brainHqStyles.fadedWhite}>
          {t('daily goal')}
        </SGLTypography>
      )}
      <SGLLinearProgress value={progress} style={brainProgressStyles.progressBar} />
    </div>
  )
}
