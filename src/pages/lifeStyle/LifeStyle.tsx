import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Box } from '@mui/material'
import { BalanceTraining } from './physioAndTrainingTab/balanceTraining/BalanceTraining'
import { DietTabExample } from './dietTab/DietTabExample'
import { RecomendationTraining } from './physioAndTrainingTab/recomendationTraining/RecomendationTraining'
import { SGLBrainHQ } from '@/components/BrainHQ/SGLBrainHQ'
import { SGLSwitch } from '@/components/UI/SGLSwitch/SGLSwitch'
import * as styles from './styles'

const TAB_DIET = 'diet'
const TAB_PHYSIO = 'physio'

export const LifeStyle = () => {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState(TAB_DIET)

  const options = [
    { label: t('lifestyle.tab.diet'), value: TAB_DIET },
    { label: t('lifestyle.tab.physio'), value: TAB_PHYSIO },
  ]

  return (
    <Box sx={styles.containerStyle}>
      <SGLBrainHQ />
      <Box sx={styles.switchWrapperStyle}>
        <SGLSwitch options={options} value={activeTab} onChange={setActiveTab} />
      </Box>
      {activeTab === TAB_DIET && <DietTabExample />}
      {activeTab === TAB_PHYSIO && (
        <>
          <BalanceTraining />
          <RecomendationTraining />
        </>
      )}
    </Box>
  )
}
