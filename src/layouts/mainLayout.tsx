import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar/NavBar'
import { useMediaQuery } from '@mui/material'

export const MainLayout = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <div style={{ display: 'flex' }}>
      <NavBar />
      <div
        style={
          isMobile ? { width: '100%', paddingBottom: '10%' } : { marginRight: '20%', width: '80%' }
        }
      >
        <Outlet />
      </div>
    </div>
  )
}
