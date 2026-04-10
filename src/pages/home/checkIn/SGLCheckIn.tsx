import { SGLCard } from '@/components/UI/Card/SGLCard'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { SGLButton } from '@/components/UI/Button/SGLButton'
import type { CSSProperties } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { theme } from '@/theme'
import { CheckInStyles, detailContainer, iconCintainer, buttonsContainer } from './style'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import BusinessIcon from '@mui/icons-material/Business'
import DoneIcon from '@mui/icons-material/Done'
import { DOT } from '@/constants/index'

interface CheckInProps {
  onClose: () => void
  style?: CSSProperties
}

export const SGLCheckIn = ({ onClose }: CheckInProps) => {
  const { t } = useTranslation()
  const [isCheckedIn, setIsCheckedIn] = useState(false)

  const handleCheckIn = () => {
    setIsCheckedIn(true)
  }

  return (
    <SGLCard style={{ ...CheckInStyles(theme).root }}>
      <SGLTypography variant="smallTitle" color="white">
        {t('checkIn.nextAppointment')} {DOT} {t('checkIn.today')}
      </SGLTypography>
      <SGLTypography variant="largeTitle" color="white">
        {t('checkIn.hyperbaricTreatment')}
      </SGLTypography>
      <div style={detailContainer}>
        <div style={iconCintainer}>
          <AccessTimeIcon style={CheckInStyles(theme).icon}></AccessTimeIcon>
          <SGLTypography variant="mediumText" color="white">
            18:00
          </SGLTypography>
        </div>
        <div style={iconCintainer}>
          <LocationOnIcon style={CheckInStyles(theme).icon}></LocationOnIcon>
          <SGLTypography variant="mediumText" color="white">
            {t('orange.cell')}
          </SGLTypography>
        </div>
        <div style={iconCintainer}>
          <BusinessIcon style={CheckInStyles(theme).icon}></BusinessIcon>
          <SGLTypography variant="mediumText" color="white">
            {t('checkIn.arisonBuilding')}
          </SGLTypography>
        </div>
      </div>
      <div style={buttonsContainer}>
        {isCheckedIn ? (
          <SGLButton
            onClick={onClose}
            variant="contained"
            styles={CheckInStyles(theme).completedButton}
          >
            <SGLTypography variant="smallTitle" color="white">
              {t('checkIn.completedSuccessfully')}
            </SGLTypography>
            <DoneIcon></DoneIcon>
          </SGLButton>
        ) : (
          <>
            <SGLButton
              onClick={handleCheckIn}
              variant="contained"
              styles={CheckInStyles(theme).containedButton}
            >
              {t('checkIn.performCheckIn')}
            </SGLButton>
            <SGLButton
              onClick={() => {}}
              variant="outlined"
              styles={CheckInStyles(theme).outlinedButton}
            >
              {t('checkIn.notComing')}
            </SGLButton>
          </>
        )}
      </div>
    </SGLCard>
  )
}
