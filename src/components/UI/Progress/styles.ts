export const linearProgressStyles = {
  height: 10,
  borderRadius: 25,
  [`& .MuiLinearProgress-bar`]: {
    borderRadius: 25,
    backgroundColor: 'primary.main',
  },
}

export const circularProgressStyles = {
  color: 'primary.main',
  '& .MuiCircularProgress-circle': {
    strokeLinecap: 'round',
  },
}
