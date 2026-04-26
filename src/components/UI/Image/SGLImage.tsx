import type { CSSProperties } from 'react'
import { useTheme } from '@mui/material'
import * as styles from './styles'

interface SGLImageProps {
  src?: string
  alt?: string
  style?: CSSProperties
}

export const SGLImage = ({ src, alt, style }: SGLImageProps) => {
  const theme = useTheme()

  return src ? (
    <img src={src} alt={alt} style={{ ...styles.image, ...style }} />
  ) : (
    <div style={{ ...styles.placeholder(theme), ...style }} />
  )
}
