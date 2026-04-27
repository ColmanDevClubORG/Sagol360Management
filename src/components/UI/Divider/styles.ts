import type { SxProps, Theme } from '@mui/material'

export const dividerStyles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 0.5,
    py: 1.5,
    borderBottom: '1px solid',
    borderColor: 'mediumGrey.main',
  } as SxProps<Theme>,

  header: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  } as SxProps<Theme>,

  headerRight: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    gap: 1,
  } as SxProps<Theme>,

  getProgress: (theme: Theme): SxProps<Theme> => ({
    height: 6,
    borderRadius: '10px',
    backgroundColor: theme.palette.mediumGrey.main,
    transform: 'scaleX(-1)',
    '& .MuiLinearProgress-bar': {
      borderRadius: '10px',
      backgroundColor: theme.palette.purple.main,
    },
  }),

  footer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    width: '100%',
  } as SxProps<Theme>,
}
