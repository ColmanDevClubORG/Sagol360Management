import { SGLButton } from '@/components/UI/Button/SGLButton'
import { SGLQrIcon } from '@/components/UI/Icons/QR/SGLQrIcon'
import * as styles from '../styles'
interface QuickLoginQRButtonProps {
  buttonText: string
}
export const QuickLoginQRButton = ({ buttonText }: QuickLoginQRButtonProps) => {
  return (
    <SGLButton variant="outlined" onClick={() => {}} styles={styles.qrButton}>
      <div style={styles.qrButtonContent}>
        <SGLQrIcon />
        <span>{buttonText}</span>
      </div>
    </SGLButton>
  )
}
