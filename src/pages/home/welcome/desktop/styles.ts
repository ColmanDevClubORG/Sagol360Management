import type { CSSProperties } from 'react'

export const welcomeDesktopStyles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.5rem 1rem',
    width: '100%',
    boxSizing: 'border-box',
  } satisfies CSSProperties,

  sections: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.7rem',
  },
  fisrtChild: {
    color: 'purple.main',
  },
  secondChild: {
    color: 'orange.main',
  },
}
