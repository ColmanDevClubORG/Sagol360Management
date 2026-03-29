import React from 'react'
import { Box, Typography } from '@mui/material'
import { getBadgeStyles } from './styles'

interface BadgeProps {
  text: string
  color?: string
}

export const Badge: React.FC<BadgeProps> = ({ text, color = 'primary.main' }) => {
  return (
    <Box sx={getBadgeStyles(color)}>
      <Typography variant="caption" sx={{ fontWeight: 'bold', color: '#fff' }}>
        {text}
      </Typography>
    </Box>
  )
}

