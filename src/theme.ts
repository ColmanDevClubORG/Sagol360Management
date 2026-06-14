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
      main: '#9333ea',
    },
    error: {
      main: '#d32f2f',
    },
    background: {
      paper: '#ffffff',
    },
    purple: {
      main: '#7e22ce',
    },
    orange: {
      main: '#f97316',
    },
    brown: {
      main: '#7c2d12',
    },
    yellow: {
      main: '#ffdd00',
    },
    green: {
      main: '#22c55e',
    },
    lightBrown: {
      main: '#9a3412',
    },
    lightYellow: {
      main: '#ffedd5',
    },
    lightGrey: {
      main: '#f3f4f6',
    },
    lightWhite: {
      main: '#e5e5e5',
    },
    lightPurple: {
      main: '#7f18d358',
    },
    midGrey: {
      main: '#8F9098',
    },
    lowOpacityPurple: {
      main: '#6d22ab2c',
    },
    lowOpacityYellow: {
      main: '#fff7ed',
    },
    lowOpacityWhite: {
      main: '#FFFFFF38',
    },
    lowOpacityGrey: {
      main: '#7a7a7a27',
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
    lightGreen: {
      main: '#e8f5e9',
    },
    darkGreen: {
      main: '#1B5E20',
    },
    lightOrange: {
      main: '#fff8ed',
    },
    warmBrown: {
      main: '#8a3720',
    },
    darkOrange: {
      main: '#ef4444',
    },
    purple50: {
      main: '#FAF5FF',
    },
    darkPurple: {
      main: '#6b21a8',
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
