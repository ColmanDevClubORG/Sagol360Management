import { theme } from '@/theme'
import type { CSSProperties } from 'react'

export const scheduleCardStyles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 1.5rem',
    padding: '1rem',
    border: `0.0625rem solid ${theme.palette.lowOpacityGrey.main}`,
    borderRight: '0.25rem solid',
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
    boxShadow: 'none',
    padding: 0,
    backgroundColor: theme.palette.lowOpacityGrey.main,
  } satisfies CSSProperties,
}
