import { Box, useTheme } from '@mui/material'
import { getDividerStyles } from './styles'

interface SGLDividerProps {
  orientation?: 'horizontal' | 'vertical'
}

export const SGLDivider = ({ orientation = 'horizontal' }: SGLDividerProps = {}) => {
  const theme = useTheme()
  const dividerStyles = getDividerStyles(theme)

  const styles =
    orientation === 'vertical' ? dividerStyles.dividerVertical : dividerStyles.dividerHorizontal

  return <Box style={styles} />
}
