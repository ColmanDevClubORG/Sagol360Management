import { SGLTypography } from '../UI/Typography/SGLTypography'
import { useTranslation } from 'react-i18next'

interface SlotLocationTextProps {
  location: string
}

export const SlotLocationText = ({ location }: SlotLocationTextProps) => {
  const { t } = useTranslation()
  return (
    <SGLTypography variant="mediumText">
      {t('appointment.showingSlots', { location })}
    </SGLTypography>
  )
}
