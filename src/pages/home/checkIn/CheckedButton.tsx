import { SGLButton } from '@/components/UI/Button/SGLButton'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import DoneIcon from '@mui/icons-material/Done'
import { useTranslation } from 'react-i18next'
import { completedButtonStyle } from './style'
import { theme } from '@/theme'
import type { AttendanceStatus } from '@/types/attendance.types'

interface CheckedButtonProps {
  attendanceStatus: AttendanceStatus
}

export const CheckedButton = ({ attendanceStatus }: CheckedButtonProps) => {
  const { t } = useTranslation()

  return (
    <SGLButton variant="contained" styles={completedButtonStyle(theme, attendanceStatus)}>
      <SGLTypography variant="smallTitle" color="white">
        {t('checkIn.completedSuccessfully')}
      </SGLTypography>
      <DoneIcon />
    </SGLButton>
  )
}
