import { SGLButton } from '@/components/UI/Button/SGLButton'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import DoneIcon from '@mui/icons-material/Done'
import { reportButtonStyle, succssesReportButtonStyle, doneIconStyle, sendIconStyle } from './style'
import { useTheme } from '@mui/material'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'

interface MetricsReportButtonProps {
  onClick: () => Promise<void>
  sentToday: boolean
}

export const MetricsReportButton = ({ onClick, sentToday }: MetricsReportButtonProps) => {
  const [report, setReport] = useState(false)
  const { t } = useTranslation()
  const theme = useTheme()

  const hndleButtonClick = async () => {
    await onClick()
    setReport(true)
  }
  return (
    <div>
      {report || sentToday ? (
        <SGLButton variant="contained" onClick={() => {}} styles={succssesReportButtonStyle(theme)}>
          <SGLTypography variant="smallTitle" color={theme.palette.background.paper}>
            {t('metricsReport.submitSuccess')}
          </SGLTypography>
          <DoneIcon style={doneIconStyle} />
        </SGLButton>
      ) : (
        <SGLButton variant="contained" onClick={hndleButtonClick} styles={reportButtonStyle(theme)}>
          <SGLTypography variant="smallTitle" color={theme.palette.background.paper}>
            {t('metricsReport.sendButton')}
          </SGLTypography>
          <SendOutlinedIcon style={sendIconStyle} />
        </SGLButton>
      )}
    </div>
  )
}
