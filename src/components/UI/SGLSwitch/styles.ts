import { styled, ToggleButtonGroup, ToggleButton } from '@mui/material'

export const SGLSwitchContainer = styled(ToggleButtonGroup)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
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
  color: theme.palette.text.secondary,
  borderRadius: '20px !important',
  border: 'none',
  '&.Mui-selected': {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[1],
    '&:hover': {
      backgroundColor: theme.palette.common.white,
    },
  },
  '&:hover': {
    backgroundColor: 'transparent',
  },
}))
