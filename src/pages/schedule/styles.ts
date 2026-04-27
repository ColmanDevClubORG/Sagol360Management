import { theme } from './../../theme'
import type { CSSProperties } from 'react'

export const scheduleStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  } satisfies CSSProperties,
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  } satisfies CSSProperties,
  sectionTitle: {
    margin: '0rem 2rem',
    fontWeight: 'bold',
    fontSize: '0.8rem',
    color: theme.palette.midGrey.main,
  } satisfies CSSProperties,
  pageUpdate: {
    display: 'flex',
    margin: '1rem 2rem',
    padding: '0.5rem',
    backgroundColor: theme.palette.lowOpacityGrey.main,
    justifyContent: 'center',
    borderRadius: '0.2rem',
  } satisfies CSSProperties,
}
