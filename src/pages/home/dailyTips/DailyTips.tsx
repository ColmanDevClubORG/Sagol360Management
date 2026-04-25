import { SGLCard } from '@/components/UI/Card/SGLCard'
import { SGLLightIcon } from '@/components/UI/Icons/LightIcon/SGLLightIcon'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { dailyTipsStyles } from './styles'
import { useIsMobile } from '@/hooks/useIsMobile'
import { TitleAndDescription } from './titleAndDescription/TitleAndDescription'
import { useTranslation } from 'react-i18next'
import { SGLDivider } from '@/components/UI/Divider/SGLDivider'
import EditIcon from '@mui/icons-material/Edit'

export const DailyTips = () => {
  const isMobile = useIsMobile()
  const { t } = useTranslation()
  return (
    <>
      <SGLCard
        style={{
          ...dailyTipsStyles.container,
          ...(isMobile ? dailyTipsStyles.containerMobile : dailyTipsStyles.containerDesktop),
        }}
      >
        <SGLLightIcon />
        {!isMobile && <SGLTypography variant="smallText">{t('daily.tip')}</SGLTypography>}
        {isMobile ? (
          <div style={dailyTipsStyles.textContainer}>
            <TitleAndDescription />
          </div>
        ) : (
          <TitleAndDescription />
        )}
      </SGLCard>

      <SGLDivider
        label={t('pain.level')}
        value="5/10"
        percent={50}
        lowLabel={t('pain.low')}
        highLabel={t('pain.high')}
        icon={<EditIcon sx={{ color: 'orange.main', fontSize: 18 }} />}
      />
    </>
  )
}
