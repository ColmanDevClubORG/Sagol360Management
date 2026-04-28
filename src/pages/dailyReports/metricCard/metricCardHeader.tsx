import { useTranslation } from 'react-i18next'
import { useTheme } from '@mui/material'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { IconStyle, headerTitleStyle, headerValueStyle, cardHeaderStyle } from './style'
import { METRIC_MAX_VALUE } from '@/constants'

interface CardHeaderProps {
  titleKey: string
  icon: React.ReactNode
  value: number
  colorIcon: 'primary' | 'secondary' | 'error' | 'midGrey' | 'yellow' | 'green'
}

export const MetricCardHeader = ({ titleKey, icon, value, colorIcon }: CardHeaderProps) => {
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
        <div style={IconStyle(theme, colorIcon)}>{icon}</div>
      </div>
    </div>
  )
}
