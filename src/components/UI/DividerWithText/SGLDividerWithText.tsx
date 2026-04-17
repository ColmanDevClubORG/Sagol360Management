import { SGLTypography } from '../Typography/SGLTypography'
import { dividerWithTextStyles } from './styles'
import type { CSSProperties } from '@mui/material'
interface SGLDividerWithTextProps {
  text: string
  styles?: CSSProperties
}
export const SGLDividerWithText = ({ text, styles, ...props }: SGLDividerWithTextProps) => {
  return (
    <div style={{ ...dividerWithTextStyles.dividerContainer, ...styles }} {...props}>
      <div style={dividerWithTextStyles.dividerLine} />
      <SGLTypography variant="smallText">{text}</SGLTypography>
      <div style={dividerWithTextStyles.dividerLine} />
    </div>
  )
}
