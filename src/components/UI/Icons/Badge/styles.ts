import { styled, Badge } from '@mui/material'

export const StyledBadge = styled(Badge)(({ theme }) => ({
  cursor: 'pointer',
  '& .MuiBadge-badge': {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.background.paper,
    border: `2px solid ${theme.palette.background.paper}`,
    height: '18px',
    minWidth: '18px',
    borderRadius: '50%',
    padding: '0',
  },
  '& .MuiSvgIcon-root': {
    color: theme.palette.purple.main,
    fontSize: '28px',
  },
}))
