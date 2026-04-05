import { Divider, styled } from '@mui/material'

export const SGLDivider = styled(Divider)(({ theme }) => ({
  borderColor: theme.palette.mediumGrey.main,
  borderBottomWidth: '2px',
  margin: '20px 0',
  width: '100%',
  opacity: 0.5,
}))
