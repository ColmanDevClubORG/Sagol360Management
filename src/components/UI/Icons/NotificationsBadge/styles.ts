export const notificationsStyles = {
  wrapper: {
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '& .MuiBadge-badge': {
      fontSize: '0.6rem',
      fontWeight: 'bold',
      minWidth: '1rem',
      height: '1rem',
      transform: 'translate(0, 0)',
      padding: '0 0.1rem',
    },
  },
  icon: {
    color: 'purple.main',
  },
}
