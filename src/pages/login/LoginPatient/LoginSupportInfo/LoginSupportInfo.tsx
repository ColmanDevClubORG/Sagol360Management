import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { SGLInfoIcon } from '@/components/UI/Icons/Info/SGLInfoIcon'
import * as styles from '../styles'
interface LoginSupportInfoProps {
  text: string
}
export const LoginSupportInfo = ({ text }: LoginSupportInfoProps) => {
  return (
    <div style={styles.infoBox}>
      <SGLInfoIcon />
      <SGLTypography variant="smallText">{text}</SGLTypography>
    </div>
  )
}
