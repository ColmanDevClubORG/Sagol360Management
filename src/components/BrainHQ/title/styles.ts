import type { CSSProperties } from 'react'

export const brainTitleStyles = {
  titleContainer: {
    display: 'flex',
    alignItems: 'start',
    gap: '0.5rem',
  } satisfies CSSProperties,
  mobileContainer: {
    flexDirection: 'column',
  } satisfies CSSProperties,
  desktopContainer: {
    flexDirection: 'column',
    gap: '1rem',
  } satisfies CSSProperties,
}
