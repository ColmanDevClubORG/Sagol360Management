import { type CSSProperties } from '@mui/material/styles'
import { theme } from '../../theme'

export const desktopNav: CSSProperties = {
  position: 'fixed',
  top: 0,
  right: 0,
  height: '100%',
  width: '20%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.lightGrey.main,
  //TODO: waiting fo the devider to be complete to add one
}

export const buttonStyle: CSSProperties = {
  width: '10rem',
  display: 'flex',
  alignSelf: 'center',
  textDecoration: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  height: '2.5rem',
}
export const buttonsDivStyle: CSSProperties = {
  paddingBottom: '1rem',
  display: 'flex',
  justifyContent: 'center',
}

export const mobileNav: CSSProperties = {
  position: 'fixed',
  bottom: 0,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: theme.palette.lightGrey.main,
  width: '100%',
  height: '10%',
}

export const navItems: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '1rem',
}

export const navItem = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  textDecoration: 'none',
  cursor: 'pointer',
  borderRadius: '0.5rem',
  pr: '1rem',
  py: '0.5rem',
  height: '2.5rem',
  transition: 'background-color 0.2s ease, color 0.2s ease',
  color: theme.palette.customGrey.main,
  '&:hover': {
    backgroundColor: theme.palette.lowOpacityPurple.main,
    color: theme.palette.purple.main,
    '& *': {
      color: theme.palette.purple.main,
    },
  },
}

export const navItemHover: CSSProperties = {
  ...navItem,
  backgroundColor: theme.palette.lowOpacityPurple.main,
}
