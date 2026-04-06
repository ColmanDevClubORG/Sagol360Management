import { styled, Badge } from '@mui/material'

export const StyledBadge = styled(Badge)(({ theme }) => ({
  cursor: 'pointer',
  '& .MuiBadge-badge': {
    ...theme.typography.caption,
    backgroundColor: theme.palette.error.main,
    color: theme.palette.background.paper,
    border: `0.1rem solid ${theme.palette.background.paper}`,
    padding: theme.spacing(0, 0.5),
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
