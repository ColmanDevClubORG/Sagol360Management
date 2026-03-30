import { House, Calendar, Activity, ChartColumn } from 'lucide-react'
import * as styles from './styles'
import { theme } from '../../theme'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const navLinks = [
  { id: 'home', href: '/home', icon: House, key: 'nav.home' },
  { id: 'calendar', href: '/schedule', icon: Calendar, key: 'nav.calendar' },
  { id: 'lifestyle', href: '/lifeStyle', icon: Activity, key: 'nav.lifestyle' },
  { id: 'metrics', href: '/dailyReports', icon: ChartColumn, key: 'nav.metrics' },
]

export const MobileNavBar = () => {
  const location = useLocation()
  return (
    <nav style={styles.mobileNav}>
      {navLinks.map(({ id, href, icon: Icon }) => {
        const isActive = location.pathname === href
        return (
          <Link key={id} to={href}>
            <Icon color={isActive ? theme.palette.purple.main : theme.palette.customGrey.main} />
          </Link>
        )
      })}
    </nav>
  )
}
