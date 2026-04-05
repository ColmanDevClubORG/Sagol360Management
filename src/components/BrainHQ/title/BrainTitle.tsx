import { brainHqStyles } from '../styles'
import { SGLBrainIcon } from '@/components/UI/Icons/BrainIcon/SGLBrainIcon'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { brainTitleStyles } from './styles'
import type { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'

interface BrainTitleProp {
  title: string
  styles?: CSSProperties
}

export const BrainTitle = ({ title, styles }: BrainTitleProp) => {
  const { t } = useTranslation()
  return (
    <div style={{ ...brainTitleStyles.titleContainer, ...styles }}>
      <SGLBrainIcon />
      <SGLTypography styles={brainHqStyles.whiteColor} variant="mediumTitle">
        {t(title)}
      </SGLTypography>
    </div>
  )
}
