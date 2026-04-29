import type { CSSProperties } from 'react'
import { useTheme } from '@mui/material'
import * as style from './styles'

type SGLImageSource = { src: string; alt?: string } | { src?: string; alt: string }

type SGLImageProps = {
  styles?: CSSProperties
} & SGLImageSource

export const SGLImage = ({ src, alt = '', styles }: SGLImageProps) => {
  const theme = useTheme()

  return src ? (
    <img src={src} alt={alt} style={{ ...style.imageStyles, ...styles }} />
  ) : (
    <div style={{ ...style.placeholderStyles(theme), ...styles }} />
  )
}
