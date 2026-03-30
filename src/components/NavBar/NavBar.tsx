import * as styles from './styles'
import { SGLTypography } from '../UI/Typography/SGLTypography'
import { House, Calendar, Activity, ChartColumn } from 'lucide-react'
import { useState } from 'react'
import { theme } from '../../theme'
import { SGLCard } from '../UI/Card/SGLCard'

{
  /*TODO: Add href for this navlinks*/
}
const navLinks = [
  { id: 'home', href: '/', icon: House, label: 'ראשי' },
  { id: 'calendar', href: '/', icon: Calendar, label: 'לו״ז' },
  { id: 'lifestyle', href: '/', icon: Activity, label: 'אורח חיים' },
  { id: 'metrics', href: '/', icon: ChartColumn, label: 'מדדים' },
]

export const NavBar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <>
      <nav style={styles.desktopNav}>
        <div style={styles.navItems}>
          {navLinks.map(({ id, href, icon: Icon, label }) => (
            <a
              key={id}
              href={href}
              style={hoveredItem === id ? styles.navItemHover : styles.navItem}
              onMouseEnter={() => setHoveredItem(id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Icon color={theme.palette.customGrey.main} />
              <SGLTypography variant="largeText">{label}</SGLTypography>
            </a>
          ))}
        </div>
        {/*TODO: Add functionality for this card*/}
        <SGLCard variant="purple" style={styles.buttonStyle}>
          <SGLTypography variant="mediumTitle" color={theme.palette.background.paper}>
            + הוסף
          </SGLTypography>
        </SGLCard>
      </nav>

      <nav style={styles.mobileNav}></nav>
    </>
  )
}
