import { styled, ToggleButtonGroup, ToggleButton } from '@mui/material'

export const SGLSwitchContainer = styled(ToggleButtonGroup)(({ theme }) => ({
  backgroundColor: theme.palette.lightGrey.main,
  borderRadius: '24px',
  padding: '4px',
  border: 'none',
  display: 'flex',
  width: 'fit-content',
  '& .MuiToggleButtonGroup-grouped': {
    border: 0,
    borderRadius: '20px',
    margin: '0 2px',
  },
}))

export const SGLToggleButton = styled(ToggleButton)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '14px',
  padding: '6px 20px',
  color: theme.palette.midGrey.main,
  border: 'none',
  borderRadius: '20px',
  '&.Mui-selected': {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.main,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      backgroundColor: theme.palette.background.paper,
    },
  },
  '&:hover': {
    backgroundColor: 'transparent',
  },
}))
