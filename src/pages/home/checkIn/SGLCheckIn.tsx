import { SGLCard } from '@/components/UI/Card/SGLCard'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { SGLButton } from '@/components/UI/Button/SGLButton'
import type { CSSProperties } from 'react'
import { theme } from '@/theme'
import { CheckInStyles } from './style'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import BusinessIcon from '@mui/icons-material/Business'

interface CheckInProps {
  onClose: () => void
  style: CSSProperties
}

export const SGLCheckIn = ({ onClose }: CheckInProps) => {
  return (
    <SGLCard style={{ ...CheckInStyles(theme).root }}>
      <SGLTypography variant="smallTitle" color="white">
        התור הבא {'•'} היום
      </SGLTypography>
      <SGLTypography variant="largeTitle" color="white">
        טיפול בתא לחץ
      </SGLTypography>
      <div style={CheckInStyles(theme).detailContainer}>
        <div style={CheckInStyles(theme).iconCintainer}>
          <AccessTimeIcon style={CheckInStyles(theme).icon}></AccessTimeIcon>
          <SGLTypography variant="mediumText" color="white">
            18:00
          </SGLTypography>
        </div>
        <div style={CheckInStyles(theme).iconCintainer}>
          <LocationOnIcon style={CheckInStyles(theme).icon}></LocationOnIcon>
          <SGLTypography variant="mediumText" color="white">
            תא כתום
          </SGLTypography>
        </div>
        <div style={CheckInStyles(theme).iconCintainer}>
          <BusinessIcon style={CheckInStyles(theme).icon}></BusinessIcon>
          <SGLTypography variant="mediumText" color="white">
            בניין אריסון
          </SGLTypography>
        </div>
      </div>
      <div style={CheckInStyles(theme).buttonsContainer}>
        <SGLButton
          onClick={onClose}
          variant="contained"
          styles={CheckInStyles(theme).containedButton}
        >
          בצע צ'ק אין
        </SGLButton>
        <SGLButton
          onClick={() => void 0}
          variant="outlined"
          styles={CheckInStyles(theme).outlinedButton}
        >
          {' '}
          לא מגיע
        </SGLButton>
      </div>
    </SGLCard>
  )
}
