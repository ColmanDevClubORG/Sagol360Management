import { useTranslation } from 'react-i18next'
import { RTL_LUNGUAGES } from '../constants'

export const useDirection = () => {
  const { i18n } = useTranslation()

  const isRtl = RTL_LUNGUAGES.includes(i18n.language)
  return isRtl
}
