import * as styles from './styles'
import { SGLTypography } from '../UI/Typography/SGLTypography'
import { useTranslation } from 'react-i18next'
import { useIsMobile } from '@/hooks/useIsMobile'
import { MobileNavBar } from './MobileNavBar'
import { Link } from 'react-router-dom'
import { AddButton } from './AddButton'
import Box from '@mui/material/Box'
import { useLocation } from 'react-router-dom'
import { NAV_LINKS } from './constants'

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
        {NAV_LINKS.map(({ id, href, icon: Icon, key: tKey }) => {
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
