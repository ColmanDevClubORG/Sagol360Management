import type { CSSProperties } from 'react'
import { useTheme } from '@mui/material'
import * as styles from './styles'

type SGLImageProps = {
  style?: CSSProperties
} & ({ src: string; alt?: string } | { src?: string; alt: string })

export const SGLImage = ({ src, alt = '', style }: SGLImageProps) => {
  const theme = useTheme()

  return src ? (
    <img src={src} alt={alt} style={{ ...styles.imageStyles, ...style }} />
  ) : (
    <div style={{ ...styles.placeholderStyles(theme), ...style }} />
  )
}
