import type { CSSProperties, ReactNode } from 'react'
import { SGLTypography } from '@/components/UI/Typography/SGLTypography'
import { doubleTypographyStyles } from './styles'
import { useTranslation } from 'react-i18next'
type TypographyVariant =
  | 'largeTitle'
  | 'mediumTitle'
  | 'smallTitle'
  | 'smallText'
  | 'mediumText'
  | 'largeText'
interface DoubleTypographyProps {
  firstChild: ReactNode
  secondChild: ReactNode
  firstVariant?: TypographyVariant
  secondVariant?: TypographyVariant
  firstColor?: string
  secondColor?: string
  styles?: CSSProperties
}
export const DoubleTypography = ({
  firstChild,
  secondChild,
  firstVariant = 'mediumTitle',
  secondVariant = 'mediumTitle',
  firstColor,
  secondColor,
  styles,
}: DoubleTypographyProps) => {
  const { t, i18n } = useTranslation()

  const formatText = (content: ReactNode) => {
    if (typeof content !== 'string') return content
    return i18n.exists(content) ? t(content) : content
  }

  return (
    <div style={{ ...doubleTypographyStyles, ...styles }}>
      <SGLTypography variant={firstVariant} color={firstColor}>
        {formatText(firstChild)}
      </SGLTypography>
      <SGLTypography variant={secondVariant} color={secondColor}>
        {formatText(secondChild)}
      </SGLTypography>
    </div>
  )
}
