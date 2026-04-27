import { SGLCard } from '@/components/UI/Card/SGLCard'
import { SGLLightIcon } from '@/components/UI/Icons/LightIcon/SGLLightIcon'
import { SGLBrainIcon } from '@/components/UI/Icons/BrainIcon/SGLBrainIcon'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { dailyTipsStyles } from './styles'
import { useIsMobile } from '@/hooks/useIsMobile'
import { TitleAndDescription } from './titleAndDescription/TitleAndDescription'
import { useTranslation } from 'react-i18next'
import { SGLDivider } from '@/components/UI/Divider/SGLDivider'
import { Bandage } from 'lucide-react'

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
        icon={<Bandage size={20} color="#fa7315" />}
      />

      <SGLDivider
        label={t('concentration')}
        value="5/10"
        percent={50}
        lowLabel={t('concentration.low')}
        highLabel={t('concentration.high')}
        icon={<SGLBrainIcon size={20} color="#f28b82" />}
      />
    </>
  )
}
