import { SGLCard } from '../Card/SGLCard'
import { SGLTypography } from '../Typography/SGLTypography'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@mui/material'
import * as styles from './styles'

interface SGLVideoCardProps {
  title: string
  description: string
  durationMinutes: number
  thumbnailUrl?: string
  onClick?: () => void
}

export const SGLVideoCard = ({
  title,
  description,
  durationMinutes,
  thumbnailUrl,
  onClick,
}: SGLVideoCardProps) => {
  const { t } = useTranslation()
  const theme = useTheme()

  return (
    <SGLCard variant="outlined" style={styles.card} onClick={onClick}>
      <div style={styles.content}>
        <SGLTypography variant="smallTitle">{title}</SGLTypography>
        <SGLTypography variant="smallText">{description}</SGLTypography>
        <SGLTypography variant="smallText" styles={styles.durationChip(theme)}>
          {t('duration.minutes', { count: durationMinutes })}
        </SGLTypography>
      </div>
      <div style={styles.thumbnailWrapper}>
        {thumbnailUrl ? (
          <img src={thumbnailUrl} alt={title} style={styles.thumbnail} />
        ) : (
          <div style={styles.thumbnailPlaceholder(theme)} />
        )}
        <div style={styles.playOverlay}>
          <div style={styles.playButton(theme)}>
            <PlayArrowIcon style={styles.playIcon(theme)} />
          </div>
        </div>
      </div>
    </SGLCard>
  )
}
