import type { Theme } from '@mui/material/styles'
import type { CSSProperties } from 'react'

export const CheckInStyles = (theme: Theme) => {
  return {
    root: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      backgroundColor: 'purple.main',
      borderRadius: '16px',
      padding: '1.5rem',
    } as CSSProperties,
    detailContainer: {
      display: 'flex',
      flexDirection: 'row',
      gap: '1rem',
    } as CSSProperties,
    iconCintainer: {
      display: 'flex',
      flexDirection: 'row',
      gap: '0.3rem',
      alignItems: 'center',
    } as CSSProperties,
    icon: {
      color: theme.palette.background.paper,
    },
    buttonsContainer: {
      display: 'flex',
      gap: '2rem',
      marginTop: '1rem',
      width: '100%',
      alignItems: 'center',
    },
    containedButton: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.purple.main,
      flex: 1,
      borderRadius: '12px',
    },
    outlinedButton: {
      borderColor: theme.palette.background.paper,
      color: theme.palette.background.paper,
      borderRadius: '12px',
    },
  }
}
