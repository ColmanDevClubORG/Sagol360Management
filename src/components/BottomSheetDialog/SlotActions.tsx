import type { RescheduleFormValues } from './types'
import * as styles from './styles'
import { SGLTypography } from '../UI/Typography/SGLTypography'
import { SGLButton } from '../UI/Button/SGLButton'
import { useTranslation } from 'react-i18next'

interface SlotActionsProps {
  onBack: () => void
  onSubmit: () => void
  selectedSlot: RescheduleFormValues['selectedSlot']
}

export const SlotActions = ({ onBack, onSubmit, selectedSlot }: SlotActionsProps) => {
  const { t } = useTranslation()
  return (
    <div style={styles.actions}>
      <SGLButton variant="outlined" onClick={onBack} fullWidth>
        <SGLTypography variant="smallTitle">{t('appointment.back')}</SGLTypography>
      </SGLButton>
      <SGLButton variant="contained" onClick={onSubmit} fullWidth disabled={!selectedSlot}>
        <SGLTypography variant="smallTitle" color="white">
          {t('appointment.sendRequest')}
        </SGLTypography>
      </SGLButton>
    </div>
  )
}
