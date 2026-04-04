import { SGLButton } from '@/components/UI/Button/SGLButton'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { SGLLink } from '@/components/UI/Icons/Link/SGLLink'
import { brainButtonStyles } from './styles'
import { useTranslation } from 'react-i18next'
import { useIsMobile } from '@/hooks/useIsMobile'
import { externalLink } from '../utils/externalLink'
import { BRAIN_HQ_CONSTANTS } from '../constants/BRAIN_HQ_CONSTANS'
export const BrainButton = () => {
  const isMobile = useIsMobile()
  const { t } = useTranslation()
  const colors = isMobile ? 'orange' : 'white'
  return (
    <SGLButton
      onClick={() => externalLink(BRAIN_HQ_CONSTANTS.LINK)}
      styles={{
        ...brainButtonStyles.button,
        ...(isMobile ? brainButtonStyles.mobileButton : brainButtonStyles.desktopButton),
      }}
      variant={isMobile ? 'contained' : 'outlined'}
    >
      <SGLTypography variant="smallText" color={colors}>
        {t('open')}
      </SGLTypography>
      <SGLTypography variant="smallTitle" color={colors}>
        {t('BrainHQ')}
      </SGLTypography>
      <SGLLink style={brainButtonStyles.link} color={colors} />
    </SGLButton>
  )
}
