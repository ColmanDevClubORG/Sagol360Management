import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import * as styles from './styles'
import { SGLSwitch } from '@/components/UI/SGLSwitch/SGLSwitch'

export const LoginOption = () => {
  const { t } = useTranslation()
  const [selected, setSelected] = useState('patient')

  const switchOptions = [
    { label: t('login.patient'), value: 'patient' },
    { label: t('login.staff'), value: 'staff' },
  ]

  return (
    <div style={styles.containerStyle}>
      <SGLSwitch options={switchOptions} value={selected} onChange={setSelected} />
    </div>
  )
}
