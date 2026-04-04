import { IconButton, Box } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import { useFormContext } from 'react-hook-form'
import type { RescheduleFormValues } from './types'
import * as styles from './styles'
import { SGLTypography } from '../UI/Typography/SGLTypography'
import { useTranslation } from 'react-i18next'
import { TIME_PREFERENCE_RANGES } from './constants'

interface TimePreferencePickerProps {
  onNext: () => void
  onClose: () => void
}

export const TimePreferencePicker = ({ onNext, onClose }: TimePreferencePickerProps) => {
  const { t } = useTranslation()
  const { setValue } = useFormContext<RescheduleFormValues>()

  const handleSelect = (preference: RescheduleFormValues['timePreference']) => {
    setValue('timePreference', preference)
    onNext()
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <SGLTypography variant="largeTitle">{t('appointment.whenConvenient')}</SGLTypography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </div>

      <div style={styles.options}>
        <Box sx={styles.card} onClick={() => handleSelect('morning')}>
          <WbSunnyOutlinedIcon style={styles.cardYellowIcon} />
          <SGLTypography variant="smallTitle">{t('appointment.morning')}</SGLTypography>
          <SGLTypography variant="mediumText">{TIME_PREFERENCE_RANGES.morning}</SGLTypography>
        </Box>

        <Box sx={styles.card} onClick={() => handleSelect('afternoon_evening')}>
          <DarkModeOutlinedIcon style={styles.cardBlueIcon} />
          <SGLTypography variant="smallTitle">{t('appointment.afternoonEvening')}</SGLTypography>
          <SGLTypography variant="mediumText">
            {TIME_PREFERENCE_RANGES.afternoon_evening}
          </SGLTypography>
        </Box>
      </div>
    </div>
  )
}
