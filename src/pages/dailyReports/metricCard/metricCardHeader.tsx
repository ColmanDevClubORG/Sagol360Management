import { useTranslation } from 'react-i18next'
import { useTheme } from '@mui/material'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { headerTitleStyle, headerValueStyle, cardHeaderStyle } from './style'
import { METRIC_MAX_VALUE } from '@/constants'

interface CardHeaderProps {
  titleKey: string
  icon: React.ReactNode
  value: number
}

export const MetricCardHeader = ({ titleKey, icon, value }: CardHeaderProps) => {
  const { t } = useTranslation()
  const theme = useTheme()

  return (
    <div style={cardHeaderStyle}>
      <div>
        <SGLTypography variant="mediumTitle" styles={headerValueStyle(theme)}>
          {value}/{METRIC_MAX_VALUE}
        </SGLTypography>
      </div>
      <div style={headerTitleStyle}>
        <div>
          <SGLTypography variant="mediumTitle">{t(titleKey)}</SGLTypography>
        </div>
        <div>{icon}</div>
      </div>
    </div>
  )
}
