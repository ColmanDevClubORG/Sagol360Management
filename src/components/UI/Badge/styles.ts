import { styled } from '@mui/material'

export const BadgeContainer = styled('div')<{ bgColor: string }>(({ bgColor }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2px 8px',
  borderRadius: '12px',
  backgroundColor: bgColor,
  minWidth: '24px',
}))

export const BadgeText = styled('span')(() => ({
  fontWeight: 'bold',
  color: '#fff',
  fontSize: '0.75rem',
}))
