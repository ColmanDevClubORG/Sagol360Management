import type { CSSProperties } from '@mui/material'

export const trainingGoalStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    justifyContent: 'center',
    gap: '0.7rem',
  } satisfies CSSProperties,
  linearProgress: {
    height: '0.8rem',
    backgroundColor: 'lowOpacityGrey.main',
    [`& .MuiLinearProgress-bar`]: {
      borderRadius: '0.3rem',
      backgroundColor: 'green.main',
    },
  },
  title: {
    color: 'purple.main',
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '0.1rem',
  } satisfies CSSProperties,
}
