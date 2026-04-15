export const brainButtonStyles = {
  button: {
    borderRadius: '0.55rem',
    textTransform: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '0.35rem',
  },

  mobileButton: {
    backgroundColor: 'background.paper',
  },
  desktopButton: {
    backgroundColor: 'lowOpacityWhite.main',
    '&.MuiButton-outlined': {
      border: `0.1rem solid `,
      borderColor: 'lightWhite.main',
    },
  },
  buttonContent: {
    gap: '0.35rem',
  },
  link: {
    marginBottom: '0.2rem',
  },
}
