import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar/NavBar'
import { useIsMobile } from '@/hooks/useIsMobile'
import * as styles from './styles'
import { SGLCheckIn } from '@/pages/home/checkIn/SGLCheckIn'

export const MainLayout = () => {
  const isMobile = useIsMobile()

  return (
    <div style={styles.layoutContainer}>
      <NavBar />
      <div style={isMobile ? styles.mobileContent : styles.desktopContent}>
        <Outlet />
        <SGLCheckIn onClose={() => {}} style={{}} />
      </div>
    </div>
  )
}
