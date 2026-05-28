import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { SGLSelect, type SelectOption } from '@/components/UI/Select/SGLSelect'
import type { CSSProperties } from '@mui/material'
import { filterHeaderStyles } from './styles'
import type { ReactNode } from 'react'

interface PropsFilterHeader {
  styles?: CSSProperties
  options?: SelectOption[]
  title: ReactNode
}

export const SGLFilterHeader = ({ styles, options, title, ...props }: PropsFilterHeader) => {
  return (
    <div style={{ ...filterHeaderStyles.container, ...styles }} {...props}>
      <SGLSelect options={options} />
      <SGLTypography variant="smallTitle">{title}</SGLTypography>
    </div>
  )
}
