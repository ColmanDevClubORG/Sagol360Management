export const linearProgressStyles = {
  height: '0.6rem',
  borderRadius: '0.3rem',
  [`& .MuiLinearProgress-bar`]: {
    borderRadius: '0.3rem',
    backgroundColor: 'primary.main',
  },
}

export const circularProgressStyles = {
  '& .MuiCircularProgress-circle': {
    strokeLinecap: 'round',
  },
}
