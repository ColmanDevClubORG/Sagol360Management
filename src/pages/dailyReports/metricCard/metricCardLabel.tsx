import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { useTranslation } from 'react-i18next'
import { labelContainerStyle, labelTextStyle } from './style'
import { useTheme } from '@mui/material'

interface CardLabelProps {
  minLabelKey: string
  maxLabelKey: string
}

export const MetricCardLabel = ({ minLabelKey, maxLabelKey }: CardLabelProps) => {
  const { t } = useTranslation()
  const theme = useTheme()

  return (
    <div style={labelContainerStyle}>
      <div>
        <SGLTypography variant="smallText" styles={labelTextStyle(theme)}>
          {t(minLabelKey)}
        </SGLTypography>
      </div>
      <div>
        <SGLTypography variant="smallText" styles={labelTextStyle(theme)}>
          {t(maxLabelKey)}
        </SGLTypography>
      </div>
    </div>
  )
}
