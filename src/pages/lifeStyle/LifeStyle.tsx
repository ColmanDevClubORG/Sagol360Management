import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BalanceTraining } from './physioAndTrainingTab/balanceTraining/BalanceTraining'
import { DietTabExample } from './dietTab/DietTabExample'
import { RecomendationTraining } from './physioAndTrainingTab/recomendationTraining/RecomendationTraining'
import { SGLBrainHQ } from '@/components/BrainHQ/SGLBrainHQ'
import { SGLSwitch } from '@/components/UI/SGLSwitch/SGLSwitch'
import { SGLContainer } from '@/components/UI/Container/SGLContainer'
import * as styles from './styles'
import { TAB_DIET, TAB_PHYSIO } from './constants'

export const LifeStyle = () => {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState(TAB_DIET)

  const options = [
    { label: t('lifestyle.tab.diet'), value: TAB_DIET },
    { label: t('lifestyle.tab.physio'), value: TAB_PHYSIO },
  ]

  return (
    <SGLContainer styles={styles.containerStyle}>
      <SGLBrainHQ />
      <SGLContainer styles={styles.switchWrapperStyle}>
        <SGLSwitch options={options} value={activeTab} onChange={setActiveTab} />
      </SGLContainer>
      {activeTab === TAB_DIET ? (
        <DietTabExample />
      ) : (
        <>
          <BalanceTraining />
          <RecomendationTraining />
        </>
      )}
    </SGLContainer>
  )
}
