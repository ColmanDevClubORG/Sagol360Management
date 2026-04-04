import type { CSSProperties, SxProps } from '@mui/material/styles'
import { theme } from '../../theme'

export const drawerPaperSx: CSSProperties = {
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  maxHeight: '90rem',
  maxWidth: '35rem',
  margin: '0 auto',
}

export const container: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  gap: '1rem',
}

export const header: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1rem',
}

export const row: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
}

export const actions: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  marginTop: '2rem',
  marginBottom: '1rem',
}

export const actionButton: CSSProperties = {
  borderRadius: 25,
}

export const icons: CSSProperties = {
  fontSize: 20,
  color: theme.palette.midGrey.main,
  marginLeft: '1rem',
}

export const options: CSSProperties = {
  display: 'flex',
  gap: '1rem',
  padding: '0rem 1rem 0rem 1rem',
}

export const card: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  padding: '1.5rem',
  borderRadius: 7,
  border: '1px solid',
  borderColor: theme.palette.mediumGrey.main,
  cursor: 'pointer',
  width: '100rem',
  marginBottom: '2rem',
  marginTop: '1rem',
  transition: 'all 0.1s ease-in-out',
  '&:hover': {
    border: '1px solid',
    borderBlockColor: theme.palette.purple.main,
    backgroundColor: theme.palette.lowOpacityPurple.main,
  },
}

export const cardIcon: CSSProperties = {
  fontSize: 45,
}

export const slotList: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginTop: '1rem',
  maxHeight: '30rem',
  overflowY: 'auto',
}

export const slotCard: CSSProperties = {
  padding: '1rem',
  borderRadius: 12,
  border: '1px solid',
  borderColor: theme.palette.mediumGrey.main,
  cursor: 'pointer',
}

export const slotCardSelected: CSSProperties = {
  border: '1px solid',
  borderColor: theme.palette.purple.main,
  backgroundColor: theme.palette.lowOpacityPurple.main,
}

export const cardYellowIcon: CSSProperties = {
  ...cardIcon,
  color: theme.palette.yellow.main,
}

export const cardBlueIcon: CSSProperties = {
  ...cardIcon,
  color: theme.palette.blue.main,
}

export const availableSpots: CSSProperties = {
  color: theme.palette.emerald.main,
}
