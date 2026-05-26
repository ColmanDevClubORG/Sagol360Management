import { theme } from './../../theme'
import type { CSSProperties } from 'react'

export const scheduleStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  } satisfies CSSProperties,
  sectionMobile: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
  } satisfies CSSProperties,
  sectionDesktop: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
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
    backgroundColor: theme.palette.lightGrey.main,
    justifyContent: 'center',
    gap: '0.5rem',
    borderRadius: '0.5rem',
  } satisfies CSSProperties,
  title: {
    display: 'flex',
    justifyContent: 'right',
    padding: '2rem 2rem 0 2rem',
  },
}
