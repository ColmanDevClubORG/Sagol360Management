import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar/NavBar'
import { useIsMobile } from '@/hooks/useIsMobile'
import * as styles from './styles'

export const MainLayout = () => {
  const isMobile = useIsMobile()

  return (
    <div style={styles.layoutContainer}>
      <NavBar />
      <div style={isMobile ? styles.mobileContent : styles.desktopContent}>
        <Outlet />
      </div>
    </div>
  )
}
