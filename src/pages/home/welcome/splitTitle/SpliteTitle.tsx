import type { CSSProperties, ReactNode } from 'react'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { splitTitleStyles } from './styles'
import { useTranslation } from 'react-i18next'
import type { TypographyVariant } from '@/components/UI/Typography/types'
interface SplitTitleProps {
  firstChild: ReactNode
  secondChild: ReactNode
  firstVariant?: TypographyVariant
  secondVariant?: TypographyVariant
  firstStyles?: CSSProperties
  secondStyles?: CSSProperties
  styles?: CSSProperties
}
export const SplitTitle = ({
  firstChild,
  secondChild,
  firstVariant = 'mediumTitle',
  secondVariant = 'mediumTitle',
  firstStyles,
  secondStyles,
  styles,
}: SplitTitleProps) => {
  const { t, i18n } = useTranslation()

  const formatText = (content: ReactNode) => {
    if (typeof content !== 'string') return content
    return i18n.exists(content) ? t(content) : content
  }

  return (
    <div style={{ ...splitTitleStyles, ...styles }}>
      <SGLTypography variant={firstVariant} styles={firstStyles}>
        {formatText(firstChild)}
      </SGLTypography>
      <SGLTypography variant={secondVariant} styles={secondStyles}>
        {formatText(secondChild)}
      </SGLTypography>
    </div>
  )
}
