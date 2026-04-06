import { styled, ToggleButtonGroup, ToggleButton } from '@mui/material'

export const SGLSwitchContainer = styled(ToggleButtonGroup)(({ theme }) => ({
  backgroundColor: theme.palette.lightGrey.main,
  borderRadius: theme.spacing(3),
  padding: theme.spacing(0.5),
  border: 'none',
  display: 'flex',
  width: 'fit-content',
  '& .MuiToggleButtonGroup-grouped': {
    border: 0,
    borderRadius: theme.spacing(2.5),
    margin: theme.spacing(0, 0.25),
  },
}))

export const SGLToggleButton = styled(ToggleButton)(({ theme }) => ({
  ...theme.typography.h6,
  textTransform: 'none',
  padding: theme.spacing(0.75, 2.5),
  color: theme.palette.midGrey.main,
  border: 'none',
  borderRadius: theme.spacing(2.5),
  '&.Mui-selected': {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.primary.main,
    boxShadow: theme.shadows[1],
    '&:hover': {
      backgroundColor: theme.palette.background.paper,
    },
  },
  '&:hover': {
    backgroundColor: 'transparent',
  },
}))
