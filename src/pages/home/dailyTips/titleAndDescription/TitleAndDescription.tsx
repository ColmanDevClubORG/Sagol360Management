import { useTranslation } from 'react-i18next'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { titleAndDescriptionStyles } from './styles'

export const TitleAndDescription = () => {
  const { t } = useTranslation()

  return (
    <>
      <SGLTypography variant="smallTitle" styles={titleAndDescriptionStyles.title}>
        {t('daily tip title')}
      </SGLTypography>
      <SGLTypography variant="smallText" styles={titleAndDescriptionStyles.description}>
        {t('daily tip description')}
      </SGLTypography>
    </>
  )
}
