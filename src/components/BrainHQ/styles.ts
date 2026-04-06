import type { CSSProperties } from 'react'

export const brainHqStyles = {
  container: {
    padding: '1.6rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1rem',
  } satisfies CSSProperties,
  textContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  whiteColor: {
    color: 'background.paper',
  },
  fadedWhite: {
    color: 'lightWhite.main',
  },
}
