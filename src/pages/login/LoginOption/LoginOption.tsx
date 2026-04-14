import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import * as styles from './styles'
import { SGLContainer } from '@/components/UI/Container/SGLContainer'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import ToggleButton from '@mui/material/ToggleButton'

export const LoginOption = () => {
  const { t } = useTranslation()
  const [selected, setSelected] = useState('patient')

  return (
    <div style={styles.containerStyle}>
      {/*TODO: Swap it with SGLSwitch once completed*/}
      <SGLContainer styles={styles.toggleGroupStyle}>
        <ToggleButtonGroup
          value={selected}
          exclusive
          onChange={(_, val) => val && setSelected(val)}
          style={styles.toggleGroupInnerStyle}
        >
          <ToggleButton
            value="patient"
            style={selected === 'patient' ? styles.toggleButtonActive : styles.toggleButtonInactive}
          >
            <SGLTypography
              variant="smallTitle"
              styles={selected === 'patient' ? styles.toggleTextActive : styles.toggleTextInactive}
            >
              {t('login.patient')}
            </SGLTypography>
          </ToggleButton>
          <ToggleButton
            value="staff"
            style={selected === 'staff' ? styles.toggleButtonActive : styles.toggleButtonInactive}
          >
            <SGLTypography
              variant="smallTitle"
              styles={selected === 'staff' ? styles.toggleTextActive : styles.toggleTextInactive}
            >
              {t('login.staff')}
            </SGLTypography>
          </ToggleButton>
        </ToggleButtonGroup>
      </SGLContainer>
    </div>
  )
}
