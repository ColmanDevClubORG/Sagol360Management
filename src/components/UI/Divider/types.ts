export const DividerOrientation = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
} as const

export type DividerOrientation =
  (typeof DividerOrientation)[keyof typeof DividerOrientation]
