import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { brainHqStyles } from '../../styles'
import { BrainTitle } from '../../title/BrainTitle'
import { useTranslation } from 'react-i18next'
import { brainTitleStyles } from '../../title/styles'

export const BrainTitleDesktop = () => {
  const { t } = useTranslation()
  return (
    <div style={{ ...brainTitleStyles.titleContainer, ...brainTitleStyles.desktopContainer }}>
      <SGLTypography styles={brainHqStyles.fadedWhite} variant="smallTitle">
        {t('brain.training')}
      </SGLTypography>
      <BrainTitle title={t('BrainHQ')} />
    </div>
  )
}
