import { useTranslation } from 'react-i18next'
import { BalanceTraining } from './physioAndTrainingTab/balanceTraining/BalanceTraining'
import { DietTabExample } from './dietTab/DietTabExample'
import { RecomendationTraining } from './physioAndTrainingTab/recomendationTraining/RecomendationTraining'

export const LifeStyle = () => {
  const { t } = useTranslation()
  return (
    <>
      <div>{t('lifestyle.page')}</div>
      <BalanceTraining />
      <RecomendationTraining />
      <DietTabExample />
    </>
  )
}
