import { theme } from '@/theme'
import type { CSSProperties } from 'react'
export const scheduleCardStyles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 2rem',
    padding: '1rem',
    borderTop: `0.0625rem solid ${theme.palette.mediumGrey.main}`,
    borderLeft: `0.0625rem solid ${theme.palette.mediumGrey.main}`,
    borderBottom: `0.0625rem solid ${theme.palette.mediumGrey.main}`,
    borderRight: `0.3rem solid ${theme.palette.purple.main}`,
    borderRadius: '1rem',
  } satisfies CSSProperties,
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.2rem',
  } satisfies CSSProperties,
  meta: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.35rem',
  } satisfies CSSProperties,
  timeRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
  } satisfies CSSProperties,
  actionButton: {
    minWidth: '2.2rem',
    height: '2.2rem',
    borderRadius: '50%',
    padding: 0,
    backgroundColor: 'lowOpacityGrey.main',
  } satisfies CSSProperties,
} as const
