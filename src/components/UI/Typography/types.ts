export const variantMap = {
  largeTitle: 'h1',
  mediumTitle: 'h2',
  smallTitle: 'h3',
  largeText: 'h4',
  mediumText: 'h5',
  smallText: 'h6',
} as const

export type TypographyVariant = keyof typeof variantMap
