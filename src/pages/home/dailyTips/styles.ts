import type { CSSProperties } from 'react'

export const dailyTipsStyles = {
  container: {
    padding: '1.5rem',
    display: 'flex',
    backgroundColor: 'lowOpacityYellow.main',
    backgroundImage: 'none',
    border: '0.1rem solid',
    borderColor: 'lightYellow.main',
  },
  containerMobile: {
    gap: '1rem',
  },
  containerDesktop: {
    flexDirection: 'column',
    gap: '0.2rem',
  } satisfies CSSProperties,
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.3rem',
  } satisfies CSSProperties,
}
