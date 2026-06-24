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
import { Login } from './pages/login/Login.tsx'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute.tsx'
import { Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PrintQR } from './pages/QRPrint/PrintQR.tsx'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  { path: '/', element: <Navigate to="/login" replace /> },
  { path: '/login', element: <Login /> },
  { path: '/printQR', element: <PrintQR /> },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/',
        element: <MainLayout />,
        children: [
          { path: 'home', element: <Home /> },
          { path: 'schedule', element: <Schedule /> },
          { path: 'lifeStyle', element: <LifeStyle /> },
          { path: 'dailyReports', element: <DailyReports /> },
        ],
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <I18nextProvider i18n={i18n}>
          <RouterProvider router={router} />
        </I18nextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
)
