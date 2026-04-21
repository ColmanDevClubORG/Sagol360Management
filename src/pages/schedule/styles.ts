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
  } satisfies CSSProperties,
  sectionTitle: {
    margin: '0rem 2rem 0.5rem',
    fontWeight: 'bold',
    fontSize: '0.8rem',
    color: theme.palette.midGrey.main,
  } satisfies CSSProperties,
  pageUpdate: {
    display: 'flex',
    justifyContent: 'center',
  } satisfies CSSProperties,
}
