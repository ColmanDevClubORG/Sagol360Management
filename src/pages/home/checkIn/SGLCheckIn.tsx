import { SGLCard } from '../../../components/UI/Card/SGLCard'
import { SGLTypography } from '../../../components/UI/Typography/SGLTypography'
import { SGLButton } from '../../../components/UI/Button/SGLButton'
import type { CSSProperties } from 'react'
import { theme } from '@/theme'

interface CheckInProps {
  onClose: () => void
  style: CSSProperties
}

export const SGLCheckIn = ({ onClose }: CheckInProps) => {
  return (
    <SGLCard
      style={{
        width: '85%',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
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
        <SGLButton
          onClick={onClose}
          variant="contained"
          sx={{ backgroundColor: theme.palette.background.paper, color: theme.palette.purple.main }}
        >
          בצע צ'ק אין
        </SGLButton>
        <SGLButton
          onClick={() => void 0}
          variant="outlined"
          sx={{
            borderColor: theme.palette.background.paper,
            color: theme.palette.background.paper,
          }}
        >
          לא מגיע
        </SGLButton>
      </div>
    </SGLCard>
  )
}
