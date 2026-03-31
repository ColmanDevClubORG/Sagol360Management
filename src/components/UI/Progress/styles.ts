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

export const circularProgressWrapperStyles = {
  position: 'relative',
  display: 'inline-flex',
}

export const circularProgressLabelStyles = {
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
