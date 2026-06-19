import { SGLCard } from '@/components/UI/Card/SGLCard'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { theme } from '@/theme'
import { useSendEmail } from '@/hooks/useSendEmail'
import { EMAIL_TYPES } from '@/constants/email.constants'
import { ATTENDANCE_STATUS } from '@/constants/attendance.constants'
import type { AttendanceStatus, AttendanceUpdatePayload } from '@/types/attendance.types'
import {
  detailContainerStyle,
  iconContainerStyle,
  rootStyle,
  iconStyle,
  wrapperTimeIconStyle,
  TimeIconStyle,
} from './style'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import BusinessIcon from '@mui/icons-material/Business'
import { CheckInActions } from './CheckInActions'
import { DOT } from '@/constants/index'
import { mockAttendanceAppointmentDetails } from './checkIn.mock'
import { useIsRtl } from '@/hooks/useIsRtl'

export const CheckIn = () => {
  const { t } = useTranslation()
  const [confirmedAttendanceStatus, setConfirmedAttendanceStatus] = useState<AttendanceStatus>()
  const {
    mutate: sendAttendanceEmail,
    isPending,
    isError,
  } = useSendEmail<AttendanceUpdatePayload>(EMAIL_TYPES.ATTENDANCE_UPDATE)

  const sendAttendanceUpdate = (attendanceStatus: AttendanceStatus) => {
    sendAttendanceEmail(
      {
        ...mockAttendanceAppointmentDetails,
        attendanceStatus,
      },
      {
        onSuccess: () => setConfirmedAttendanceStatus(attendanceStatus),
      },
    )
  }
  const isRtl = useIsRtl()

  const [isCheckedIn, setIsCheckedIn] = useState(false)

  const handleCheckIn = () => {
    sendAttendanceUpdate(ATTENDANCE_STATUS.COMING)
  }
  const handleCancelTreatment = () => {
    sendAttendanceUpdate(ATTENDANCE_STATUS.NOT_COMING)
  }

  return (
    <SGLCard style={rootStyle(theme)}>
      <div style={wrapperTimeIconStyle(theme, isRtl)}>
        <div style={TimeIconStyle(theme, isRtl)}>
          <AccessTimeIcon fontSize="medium" style={iconStyle(theme)} />
        </div>
      </div>

      <SGLTypography variant="smallTitle" color="white">
        {t('checkIn.nextAppointment')} {DOT} {t('checkIn.today')}
      </SGLTypography>
      <SGLTypography variant="largeTitle" color="white">
        {t('checkIn.hyperbaricTreatment')}
      </SGLTypography>

      <div style={detailContainerStyle}>
        <div style={iconContainerStyle}>
          <AccessTimeIcon style={iconStyle(theme)} fontSize="small" />
          <SGLTypography variant="mediumText" color="white">
            {mockAttendanceAppointmentDetails.time}
          </SGLTypography>
        </div>
        <div style={iconContainerStyle}>
          <LocationOnOutlinedIcon style={iconStyle(theme)} fontSize="small" />
          <SGLTypography variant="mediumText" color="white">
            {t('chckIn.orangeCell')}
          </SGLTypography>
        </div>
        <div style={iconContainerStyle}>
          <BusinessIcon style={iconStyle(theme)} fontSize="small" />
          <SGLTypography variant="mediumText" color="white">
            {t('checkIn.arisonBuilding')}
          </SGLTypography>
        </div>
      </div>
      {isError ? (
        <div role="alert">
          <SGLTypography variant="mediumText" color="white">
            {t('checkIn.updateFailed')}
          </SGLTypography>
        </div>
      ) : null}
      <CheckInActions
        attendanceStatus={confirmedAttendanceStatus}
        onCheckIn={handleCheckIn}
        onCancel={handleCancelTreatment}
        isPending={isPending}
      />
    </SGLCard>
  )
}
