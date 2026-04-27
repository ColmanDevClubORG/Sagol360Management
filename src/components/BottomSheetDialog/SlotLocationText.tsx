import { SGLTypography } from '../UI/Typography/SGLTypography'
import { useTranslation } from 'react-i18next'

interface SlotLocationTextProps {
  chamber: string
}

export const SlotLocationText = ({ chamber }: SlotLocationTextProps) => {
  const { t } = useTranslation()
  return (
    <SGLTypography variant="mediumText">
      {t('appointment.showingSlots', {
        location: t(chamber),
      })}
    </SGLTypography>
  )
}
