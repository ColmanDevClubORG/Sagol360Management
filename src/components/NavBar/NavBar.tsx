import * as styles from './styles'
import { SGLTypography } from '../UI/Typography/SGLTypography'
import { House, Calendar, Activity, ChartColumn } from 'lucide-react'
import { useState } from 'react'
import { useMediaQuery } from '@mui/material'
import { theme } from '../../theme'
import { SGLCard } from '../UI/Card/SGLCard'
import { useTranslation } from 'react-i18next'

const navLinks = [
  { id: 'home', href: '/home', icon: House, key: 'nav.home' },
  { id: 'calendar', href: '/schedule', icon: Calendar, key: 'nav.calendar' },
  { id: 'lifestyle', href: '/lifeStyle', icon: Activity, key: 'nav.lifestyle' },
  { id: 'metrics', href: '/dailyReports', icon: ChartColumn, key: 'nav.metrics' },
]

export const NavBar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const isMobile = useMediaQuery('(max-width: 768px)')
  const { t } = useTranslation()

  if (isMobile) {
    return (
      <nav style={styles.mobileNav}>
        {navLinks.map(({ id, href, icon: Icon }) => (
          <a key={id} href={href}>
            <Icon color={theme.palette.customGrey.main} />
          </a>
        ))}
      </nav>
    )
  }

  return (
    <nav style={styles.desktopNav}>
      <div style={styles.navItems}>
        {navLinks.map(({ id, href, icon: Icon, key: tKey }) => (
          <a
            key={id}
            href={href}
            style={hoveredItem === id ? styles.navItemHover : styles.navItem}
            onMouseEnter={() => setHoveredItem(id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Icon color={theme.palette.customGrey.main} />
            <SGLTypography variant="largeText">{t(tKey)}</SGLTypography>
          </a>
        ))}
      </div>
      {/*TODO: Add functionality for this card*/}
      <div style={styles.buttonsDivStyle}>
        <SGLCard variant="purple" style={styles.buttonStyle}>
          <SGLTypography variant="mediumTitle" color={theme.palette.background.paper}>
            + הוסף
          </SGLTypography>
        </SGLCard>
      </div>
    </nav>
  )
}
