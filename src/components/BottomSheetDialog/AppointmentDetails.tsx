// steps/AppointmentDetails.tsx
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import type { Appointment } from './types'
import { formatDuration } from './utils'
import * as styles from './styles'
import { SGLTypography } from '../UI/Typography/SGLTypography'
import { SGLButton } from '../UI/Button/SGLButton'
import { useTranslation } from 'react-i18next'

interface AppointmentDetailsProps {
  appointment: Appointment
  onChangeDate: () => void
  onClose: () => void
}

export const AppointmentDetails = ({
  appointment,
  onChangeDate,
  onClose,
}: AppointmentDetailsProps) => {
  const { t } = useTranslation()
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <SGLTypography variant="largeTitle">{appointment.title}</SGLTypography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </div>

      <div style={styles.row}>
        <AccessTimeIcon style={styles.icons} />
        <SGLTypography variant="mediumText">
          {appointment.time} ({formatDuration(appointment.durationMinutes)})
        </SGLTypography>
      </div>

      <div style={styles.row}>
        <LocationOnOutlinedIcon style={styles.icons} />
        <SGLTypography variant="mediumText">{appointment.location}</SGLTypography>
      </div>

      <div style={styles.actions}>
        <SGLButton variant="outlined" onClick={() => {}} fullWidth>
          <SGLTypography variant="smallTitle">{t('appointment.moreDetails')}</SGLTypography>
        </SGLButton>
        <SGLButton variant="contained" onClick={onChangeDate} fullWidth>
          <SGLTypography variant="smallTitle" color="white">
            {t('appointment.changeDate')}
          </SGLTypography>
        </SGLButton>
      </div>
    </div>
  )
}
