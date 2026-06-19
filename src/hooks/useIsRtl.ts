import { useTranslation } from 'react-i18next'

export const useIsRtl = () => {
  const { i18n } = useTranslation()

  const isRtl = i18n.language === 'he' || i18n.language === 'ar'
  return isRtl
}
