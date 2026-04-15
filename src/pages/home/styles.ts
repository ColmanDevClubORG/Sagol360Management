import { styled } from '@mui/material'

export const HomeWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

export const NavContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'left',
  paddingTop: '0.9rem',
  paddingLeft: '0.9rem',
  marginBottom: theme.spacing(1),
}))
