import { type CSSProperties } from '@mui/material/styles'
import { theme } from '../../theme'

export const desktopNav: CSSProperties = {
  position: 'fixed',
  top: 0,
  right: 0,
  minHeight: '49rem',
  width: '15rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  paddingTop: '2rem',
  paddingBottom: '6rem',
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

export const mobileNav: CSSProperties = {}

export const navItems: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
}

export const navItem: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  textDecoration: 'none',
  cursor: 'pointer',
  borderRadius: '0.5rem',
  paddingRight: '1rem',
  paddingTop: '0.5rem',
  paddingBottom: '0.5rem',
  height: '2.5rem',
  transition: 'background-color 0.2s ease',
}

export const navItemHover: CSSProperties = {
  ...navItem,
  backgroundColor: theme.palette.lowOpacityPurple.main,
}
