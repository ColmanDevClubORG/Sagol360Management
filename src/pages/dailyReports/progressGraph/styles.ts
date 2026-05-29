import type { CSSProperties } from '@mui/material'
import type { Theme } from '@mui/material/styles'

export const progressGraphStyles = (theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    paddingBottom: '0.5rem',
    width: '90%',
    borderRadius: '1rem',
    boxShadow: theme.shadows[2],
  } as CSSProperties,

  chartWrapper: {
    display: 'flex',
    margin: '0 auto',
    width: '100%',
    height: '30%',
  } as CSSProperties,

  header: {
    display: 'flex',
    flexDirection: 'row',
    gap: '3rem',
  } as CSSProperties,
})
