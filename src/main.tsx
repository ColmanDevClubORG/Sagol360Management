import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import { I18nextProvider } from 'react-i18next'
import { theme } from './theme.ts'
import './index.css'
import i18n from './i18n'
import { MainLayout } from './layouts/mainLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/home/home.tsx'
import { Schedule } from './pages/schedule/Schedule.tsx'
import { LifeStyle } from './pages/lifeStyle/LifeStyle.tsx'
import { DailyReports } from './pages/dailyReports/DailyReports.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'schedule', element: <Schedule /> },
      { path: 'lifeStyle', element: <LifeStyle /> },
      { path: 'dailyReports', element: <DailyReports /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </ThemeProvider>
  </StrictMode>,
)
