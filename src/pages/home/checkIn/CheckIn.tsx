import { SGLCard } from '@/components/UI/Card/SGLCard'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import type { CSSProperties } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { theme } from '@/theme'
import { CheckInStyles, detailContainer, iconContainer } from './style'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import BusinessIcon from '@mui/icons-material/Business'
import { CheckInActions } from './CheckInActions'

interface CheckInProps {
  onClose: () => void
  style?: CSSProperties
}

export const CheckIn = ({ onClose }: CheckInProps) => {
  const { t } = useTranslation()
  const [isCheckedIn, setIsCheckedIn] = useState(false)

  const handleCheckIn = () => {
    setIsCheckedIn(true)
  }

  return (
    <SGLCard style={{ ...CheckInStyles(theme).root }}>
      <SGLTypography variant="smallTitle" color="white">
        {t('checkIn.nextAppointment')} {'•'} {t('checkIn.today')}
      </SGLTypography>
      <SGLTypography variant="largeTitle" color="white">
        {t('checkIn.hyperbaricTreatment')}
      </SGLTypography>
      <div style={detailContainer}>
        <div style={iconContainer}>
          <AccessTimeIcon style={CheckInStyles(theme).icon}></AccessTimeIcon>
          <SGLTypography variant="mediumText" color="white">
            18:00
          </SGLTypography>
        </div>
        <div style={iconContainer}>
          <LocationOnIcon style={CheckInStyles(theme).icon}></LocationOnIcon>
          <SGLTypography variant="mediumText" color="white">
            {t('chckIn.orangeCell')}
          </SGLTypography>
        </div>
        <div style={iconContainer}>
          <BusinessIcon style={CheckInStyles(theme).icon}></BusinessIcon>
          <SGLTypography variant="mediumText" color="white">
            {t('checkIn.arisonBuilding')}
          </SGLTypography>
        </div>
      </div>
      <CheckInActions onClose={onClose} onCheckIn={handleCheckIn} isCheckedIn={isCheckedIn} />
    </SGLCard>
  )
}
