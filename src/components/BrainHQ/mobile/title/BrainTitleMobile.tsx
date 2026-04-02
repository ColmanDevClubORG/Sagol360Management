import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { brainHqStyles } from '../../styles'
import { BrainTitle } from '../../title/BrainTitle'
import { useTranslation } from 'react-i18next'
import { brainTitleStyles } from '../../title/styles'

export const BrainTitleMobile = () => {
  const { t } = useTranslation()
  return (
    <div style={{ ...brainTitleStyles.titleContainer, ...brainTitleStyles.mobileContainer }}>
      <BrainTitle title="brain training" />
      <SGLTypography variant="smallText" styles={brainHqStyles.fadedWhite}>
        {t('daily goal')}
      </SGLTypography>
    </div>
  )
}
