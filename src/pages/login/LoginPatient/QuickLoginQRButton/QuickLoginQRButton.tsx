import { SGLButton } from '@/components/UI/Button/SGLButton'
import { SGLQR } from '@/components/UI/Icons/QR/SGLQR'
import * as styles from '../styles'
interface QuickLoginQRButtonProps {
  buttonText: string
}
export const QuickLoginQRButton = ({ buttonText }: QuickLoginQRButtonProps) => {
  return (
    <SGLButton variant="outlined" onClick={() => {}} styles={styles.qrButton}>
      <div style={styles.qrButtonContent}>
        <SGLQR />
        <span>{buttonText}</span>
      </div>
    </SGLButton>
  )
}
