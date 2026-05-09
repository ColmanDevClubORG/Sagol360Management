import { Box, useTheme } from '@mui/material'
import { getDividerStyles, DividerOrientation } from './styles'

interface SGLDividerProps {
  orientation?: DividerOrientation
}

export const SGLDivider = ({ orientation = DividerOrientation.HORIZONTAL }: SGLDividerProps = {}) => {
  const theme = useTheme()
  const dividerStyles = getDividerStyles(theme)

  const styles =
    orientation === DividerOrientation.VERTICAL ? dividerStyles.dividerVertical : dividerStyles.dividerHorizontal

  return <Box style={styles} />
}
