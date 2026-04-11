import { styled, ToggleButtonGroup, ToggleButton } from '@mui/material'

export const SGLSwitchContainer = styled(ToggleButtonGroup)(({ theme }) => ({
  backgroundColor: theme.palette.lightGrey.main,
  borderRadius: theme.spacing(1.5),
  padding: theme.spacing(0.5),
  border: 'none',
  display: 'flex',
  width: '100%',
  maxWidth: '350px',
  '& .MuiToggleButtonGroup-grouped': {
    border: 0,
    borderRadius: theme.spacing(1),
  },
}))

export const SGLToggleButton = styled(ToggleButton)(({ theme }) => ({
  flex: 1,
  textTransform: 'none',
  padding: theme.spacing(1, 2),
  color: theme.palette.midGrey.main,
  border: 'none',
  transition: theme.transitions.create(['background-color', 'color', 'box-shadow'], {
    duration: theme.transitions.duration.short,
  }),
  '&.Mui-selected': {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    '&:hover': {
      backgroundColor: theme.palette.background.paper,
    },
  },
  '&:hover': {
    backgroundColor: 'transparent',
  },
}))
