import { SGLButton } from '@/components/UI/Button/SGLButton'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { SGLLink } from '@/components/UI/Icons/Link/SGLLink'
import { brainButtonStyles } from './styles'
import { useTranslation } from 'react-i18next'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useExternalLink } from '@/hooks/useExternalLink'

export const BrainButton = () => {
  const isMobile = useIsMobile()
  const { t } = useTranslation()
  const openLink = useExternalLink()
  const colors = isMobile ? 'orange' : 'white'
  return (
    <SGLButton
      onClick={() => openLink('https://www.brainhq.com/')}
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
