import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import type { Appointment } from './types'
import * as styles from './styles'
import { SGLTypography } from '../UI/Typography/SGLTypography'
import { SGLButton } from '../UI/Button/SGLButton'
import { useTranslation } from 'react-i18next'
import { getAppointmentTitleKey } from '@/utils/appointmentUtils'
import { formatDisplayTime } from '@/utils/datesUtils'

interface AppointmentDetailsProps {
  appointment: Appointment
  onChangeDate: () => void
  onClose: () => void
}

export const AppointmentDetails = ({ appointment, onChangeDate }: AppointmentDetailsProps) => {
  const { t } = useTranslation()
  const displayTime = formatDisplayTime(appointment.time)
  const titleKey = getAppointmentTitleKey(appointment.chamber)

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <SGLTypography variant="largeTitle">{t(titleKey)}</SGLTypography>
      </div>

      <div style={styles.row}>
        <AccessTimeIcon style={styles.icons} />
        <SGLTypography variant="mediumText">
          {displayTime} ({t('appointment.duration.twoHours')})
        </SGLTypography>
      </div>

      <div style={styles.row}>
        <LocationOnOutlinedIcon style={styles.icons} />
        <SGLTypography variant="mediumText">{t(appointment.chamber)}</SGLTypography>
      </div>

      <div style={styles.actions}>
        <SGLButton
          variant="outlined"
          onClick={() => {}}
          fullWidth
          styles={styles.actionButtonOutlined}
        >
          <SGLTypography variant="smallTitle">{t('appointment.moreDetails')}</SGLTypography>
        </SGLButton>
        <SGLButton
          variant="contained"
          onClick={onChangeDate}
          fullWidth
          styles={styles.actionButtonFilled}
        >
          <SGLTypography variant="smallTitle" color="white">
            {t('appointment.changeDate')}
          </SGLTypography>
        </SGLButton>
      </div>
    </div>
  )
}
