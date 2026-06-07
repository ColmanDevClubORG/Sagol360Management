import type { CSSProperties } from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

interface SGLCalendarIconProps {
  color?: string
  styles?: CSSProperties
}

export const SGLCalendarIcon = ({ color, styles, ...props }: SGLCalendarIconProps) => {
  return <CalendarMonthIcon style={{ color, ...styles }} {...props} />
}
