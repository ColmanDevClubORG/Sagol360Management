import { styled, Badge } from '@mui/material'

export const StyledBadge = styled(Badge)(({ theme }) => ({
  cursor: 'pointer',
  '& .MuiBadge-badge': {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.background.paper,
    border: `1.5px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    fontSize: '10px',
    fontWeight: 700,
  },
  '& .MuiSvgIcon-root': {
    color: theme.palette.midGrey.main,
    transition: 'color 0.2s',
  },
  '&:hover .MuiSvgIcon-root': {
    color: theme.palette.primary.main,
  },
}))
