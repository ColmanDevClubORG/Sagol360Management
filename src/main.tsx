import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import './index.css'
import App from './App.tsx'

const textColors = {
  black: '#000000',
  grey: '#8F9098',
}

const theme = createTheme({
  direction: 'rtl',
  palette: {
    error: {
      main: '#d32f2f',
    },
    primary: {
      main: '#1976d2',
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
      <App />
    </ThemeProvider>
  </StrictMode>,
)
