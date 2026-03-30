import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { I18nextProvider } from 'react-i18next'
import './index.css'
import App from './App.tsx'
import i18n from './i18n'
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
const textColors = {
  black: '#000000',
  grey: '#8F9098',
}

const theme = createTheme({
  direction: 'rtl',
  breakpoints: {
    values: {
      mobile: 0,
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
    success: {
      main: '#4CAF50',
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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </ThemeProvider>
  </StrictMode>,
)
