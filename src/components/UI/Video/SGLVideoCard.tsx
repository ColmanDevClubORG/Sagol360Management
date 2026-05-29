import { SGLCard } from '../Card/SGLCard'
import { SGLTypography } from '../Typography/SGLTypography'
import { SGLPlayArrowIcon } from '../Icons/PlayArrowIcon/SGLPlayArrowIcon'
import { SGLImage } from '../Image/SGLImage'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@mui/material'
import * as styles from './styles'

interface SGLVideoCardProps {
  title: string
  description: string
  durationInMinutes: number
  thumbnailUrl?: string
  onClick?: () => void
}

export const SGLVideoCard = ({
  title = '',
  description = '',
  durationInMinutes,
  thumbnailUrl,
  onClick,
}: SGLVideoCardProps) => {
  const { t } = useTranslation()
  const theme = useTheme()

  return (
    <SGLCard variant="white" style={styles.card} onClick={onClick}>
      <div style={styles.content}>
        <SGLTypography variant="smallTitle">{title}</SGLTypography>
        <SGLTypography variant="smallText">{description}</SGLTypography>
        <SGLTypography variant="smallText" styles={styles.durationChip(theme)}>
          {t('duration.minutes', { count: durationInMinutes })}
        </SGLTypography>
      </div>
      <div style={styles.thumbnailWrapper}>
        <SGLImage src={thumbnailUrl} alt={title} />
        <div style={styles.playOverlay}>
          <div style={styles.playButton(theme)}>
            <SGLPlayArrowIcon style={styles.playIcon(theme)} />
          </div>
        </div>
      </div>
    </SGLCard>
  )
}
