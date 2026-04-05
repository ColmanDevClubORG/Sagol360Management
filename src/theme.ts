import { createTheme } from '@mui/material/styles'

const textColors = {
  black: '#000000',
  grey: '#8F9098',
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false
    sm: false
    md: false
    lg: false
    xl: false
    mobile: true
    tablet: true
    laptop: true
    desktop: true
  }
}

export const theme = createTheme({
  direction: 'rtl',
  breakpoints: {
    values: {
      mobile: 425,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#8b2cf5',
    },
    error: {
      main: '#d32f2f',
    },
    background: {
      paper: '#ffffff',
    },
    purple: {
      main: '#6D22AB',
    },
    orange: {
      main: '#F57C00',
    },
    lightGrey: {
      main: '#f3f4f6',
    },
    midGrey: {
      main: '#8F9098',
    },
    lowOpacityPurple: {
      main: '#6d22ab2c',
    },
    mediumGrey: {
      main: '#dfdcdc',
    },
    blue: {
      main: '#3B82F6',
    },
    emerald: {
      main: '#10B981',
    },
    yellow: {
      main: '#EAB308',
    },
  },
  typography: {
    h1: {
      fontSize: '26px',
      fontWeight: 700,
      color: textColors.black,
    },
    h2: {
      fontSize: '22px',
      fontWeight: 700,
      color: textColors.black,
    },
    h3: {
      fontSize: '16px',
      fontWeight: 700,
      color: textColors.black,
    },
    h4: {
      fontSize: '18px',
      color: textColors.grey,
      fontWeight: 400,
    },
    h5: {
      fontSize: '16px',
      color: textColors.grey,
      fontWeight: 400,
    },
    h6: {
      fontSize: '14px',
      color: textColors.grey,
      fontWeight: 400,
    },
  },
})
