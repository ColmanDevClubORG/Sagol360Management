import type { CSSProperties } from '@mui/material'

export const minutesCountStyles = {
  minutesContainerMobile: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'baseline',
  } satisfies CSSProperties,
  minutesCount: {
    display: 'flex',
    alignItems: 'baseline',
  } satisfies CSSProperties,
}
