import type { SxProps, Theme } from '@mui/material'

export const dividerStyles = {
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    my: 2,
  } as SxProps<Theme>,

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  } as SxProps<Theme>,

  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  } as SxProps<Theme>,

  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as SxProps<Theme>,

  progress: {
    height: 8,
    borderRadius: 4,
    backgroundColor: 'lightGrey.main',
    '& .MuiLinearProgress-bar': {
      borderRadius: 4,
      backgroundColor: 'purple.main',
    },
  } as SxProps<Theme>,

  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  } as SxProps<Theme>,
}
