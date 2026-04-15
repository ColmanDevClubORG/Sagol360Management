import { SGLCard } from '@/components/UI/Card/SGLCard'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import type { CSSProperties } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { theme } from '@/theme'
import { detailContainerStyle, iconContainerStyle, rootStyle, iconStyle } from './style'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import BusinessIcon from '@mui/icons-material/Business'
import { CheckInActions } from './CheckInActions'
import { DOT } from '@/constants/index'

interface CheckInProps {
  onDone: () => void
  style?: CSSProperties
}

export const CheckIn = ({ onDone }: CheckInProps) => {
  const { t } = useTranslation()
  const [isCheckedIn, setIsCheckedIn] = useState(false)

  const handleCheckIn = () => {
    setIsCheckedIn(true)
  }

  return (
    <SGLCard style={rootStyle(theme)}>
      <SGLTypography variant="smallTitle" color="white">
        {t('checkIn.nextAppointment')} {DOT} {t('checkIn.today')}
      </SGLTypography>
      <SGLTypography variant="largeTitle" color="white">
        {t('checkIn.hyperbaricTreatment')}
      </SGLTypography>
      <div style={detailContainerStyle}>
        <div style={iconContainerStyle}>
          <AccessTimeIcon style={iconStyle(theme)}></AccessTimeIcon>
          <SGLTypography variant="mediumText" color="white">
            18:00
          </SGLTypography>
        </div>
        <div style={iconContainerStyle}>
          <LocationOnIcon style={iconStyle(theme)}></LocationOnIcon>
          <SGLTypography variant="mediumText" color="white">
            {t('chckIn.orangeCell')}
          </SGLTypography>
        </div>
        <div style={iconContainerStyle}>
          <BusinessIcon style={iconStyle(theme)}></BusinessIcon>
          <SGLTypography variant="mediumText" color="white">
            {t('checkIn.arisonBuilding')}
          </SGLTypography>
        </div>
      </div>
      <CheckInActions onDone={onDone} onCheckIn={handleCheckIn} isCheckedIn={isCheckedIn} />
    </SGLCard>
  )
}
