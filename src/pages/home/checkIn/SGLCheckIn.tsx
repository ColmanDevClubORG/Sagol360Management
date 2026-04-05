import { SGLCard } from '../../../components/UI/Card/SGLCard'
import { SGLTypography } from '../../../components/UI/Typography/SGLTypography'
import { SGLButton } from '../../../components/UI/Button/SGLButton'
import type { CSSProperties } from 'react'
import { theme } from '@/theme'
import { CheckInStyles } from './style'

interface CheckInProps {
  onClose: () => void
  style: CSSProperties
}

export const SGLCheckIn = ({ onClose }: CheckInProps) => {
  return (
    <SGLCard /*sx={CheckInStyles(theme).root}*/>
      <SGLTypography variant="smallTitle" color="white">
        התור הבא * היום
      </SGLTypography>
      <SGLTypography variant="mediumTitle" color="white">
        טיפול בתא לחץ
      </SGLTypography>
      <SGLTypography variant="smallText" color="white">
        18:05 - תא כתום - בניין אריסון
      </SGLTypography>
      <div>
        <SGLButton onClick={onClose} variant="contained" sx={CheckInStyles(theme).containedButton}>
          בצע צ'ק אין
        </SGLButton>
        <SGLButton
          onClick={() => void 0}
          variant="outlined"
          sx={CheckInStyles(theme).outlinedButton}
        >
          לא מגיע
        </SGLButton>
      </div>
    </SGLCard>
  )
}
