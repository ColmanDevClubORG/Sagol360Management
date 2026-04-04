import { SGLCard } from '../../../components/UI/Card/SGLCard'
import { SGLTypography } from '../../../components/UI/Typography/SGLTypography'
import { SGLButton } from '../../../components/UI/Button/SGLButton'
import type { CSSProperties } from 'react'

interface CheckInProps {
  onClose: () => void
  style: CSSProperties
}

export const CheckIn = ({ onClose }: CheckInProps) => {
  return (
    <SGLCard
      style={{
        width: '400px',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <SGLTypography>התור הבא * היום</SGLTypography>
      <SGLTypography>טיפול בתא לחץ</SGLTypography>
      <SGLTypography>18:05 - תא כתום - בניין אריסון</SGLTypography>

      <SGLButton onClick={onClose} variant="contained">
        בצע צ'ק אין
      </SGLButton>
      <SGLButton onClick={() => void 0} variant="outlined">
        לא מגיע
      </SGLButton>
    </SGLCard>
  )
}
