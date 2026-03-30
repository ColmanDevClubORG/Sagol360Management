import * as styles from './styles'
import { SGLTypography } from '../UI/Typography/SGLTypography'
import { House, Calendar, Activity, ChartColumn } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useIsMobile } from '@/hooks/useIsMobile'
import { MobileNavBar } from './MobileNavBar'
import { Link } from 'react-router-dom'
import { AddButton } from './AddButton'
import Box from '@mui/material/Box'
import { useLocation } from 'react-router-dom'

const navLinks = [
  { id: 'home', href: '/home', icon: House, key: 'nav.home' },
  { id: 'calendar', href: '/schedule', icon: Calendar, key: 'nav.calendar' },
  { id: 'lifestyle', href: '/lifeStyle', icon: Activity, key: 'nav.lifestyle' },
  { id: 'metrics', href: '/dailyReports', icon: ChartColumn, key: 'nav.metrics' },
]

export const NavBar = () => {
  const location = useLocation()
  const isMobile = useIsMobile()
  const { t } = useTranslation()

  if (isMobile) {
    return <MobileNavBar />
  }

  return (
    <nav style={styles.desktopNav}>
      <div style={styles.navItems}>
        {navLinks.map(({ id, href, icon: Icon, key: tKey }) => {
          const isActive = location.pathname === href
          return (
            <Box
              key={id}
              component={Link}
              to={href}
              sx={isActive ? styles.navItemActive : styles.navItem}
            >
              <Icon />
              <SGLTypography variant="largeText">{t(tKey)}</SGLTypography>
            </Box>
          )
        })}
      </div>
      {/*TODO: Add functionality for this card*/}
      <AddButton />
    </nav>
  )
}
