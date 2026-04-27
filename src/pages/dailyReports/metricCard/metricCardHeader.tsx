import { useTranslation } from 'react-i18next'
import { useTheme } from '@mui/material'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { headerTitleStyle, headerValueStyle, cardHeaderStyle } from './style'

interface CardHeaderProps {
  titleKey: string
  icon: React.ReactNode
  value: number
}

export const MetricCardHeader = ({ titleKey, icon, value }: CardHeaderProps) => {
  const { t } = useTranslation()
  const theme = useTheme()

  return (
    <div className="value-header" style={cardHeaderStyle}>
      <div className="header-left">
        <SGLTypography variant="mediumTitle" styles={headerValueStyle(theme)}>
          {value}/10
        </SGLTypography>
      </div>
      <div className="title-header" style={headerTitleStyle}>
        <div>
          <SGLTypography variant="mediumTitle">{t(titleKey)}</SGLTypography>
        </div>
        <div>{icon}</div>
      </div>
    </div>
  )
}
