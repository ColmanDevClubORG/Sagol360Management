export const linearProgressStyles = {
  height: '0.6rem',
  borderRadius: '0.3rem',
  [`& .MuiLinearProgress-bar`]: {
    borderRadius: '0.3rem',
    backgroundColor: 'primary.main',
  },
}

export const circularProgressStyles = {
  color: 'primary.main',
  '& .MuiCircularProgress-circle': {
    strokeLinecap: 'round',
  },
}
