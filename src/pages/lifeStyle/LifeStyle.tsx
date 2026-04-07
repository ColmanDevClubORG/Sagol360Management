import { useTranslation } from 'react-i18next'

export const LifeStyle = () => {
  const { t } = useTranslation()
  return <div>{t('lifestyle.page')}</div>
}
