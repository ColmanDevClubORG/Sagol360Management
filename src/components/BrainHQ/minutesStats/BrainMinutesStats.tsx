import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { minutesCountStyles } from './styles'
import { brainHqStyles } from '@/components/BrainHQ/styles'
import { useTranslation } from 'react-i18next'

interface MinutesStatsProps {
  current: number
}

export const BrainMinutesStats = ({ current }: MinutesStatsProps) => {
  const { t } = useTranslation()
  return (
    <div style={minutesCountStyles.minutesContainerMobile}>
      <div style={minutesCountStyles.minutesCount}>
        <SGLTypography variant="largeTitle" styles={brainHqStyles.whiteColor}>
          {current}
        </SGLTypography>
        <SGLTypography variant="smallText" styles={brainHqStyles.whiteColor}>
          {t('minutes')}
        </SGLTypography>
      </div>
      <SGLTypography variant="smallText" styles={brainHqStyles.fadedWhite}>
        {t('out of')}
      </SGLTypography>
    </div>
  )
}
