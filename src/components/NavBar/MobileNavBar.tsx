import * as styles from './styles'
import { theme } from '../../theme'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { NAV_LINKS } from './constants'

export const MobileNavBar = () => {
  const location = useLocation()
  return (
    <nav style={styles.mobileNav}>
      {NAV_LINKS.map(({ id, href, icon: Icon }) => {
        const isActive = location.pathname === href
        return (
          <Link key={id} to={href}>
            <Icon color={isActive ? theme.palette.purple.main : theme.palette.midGrey.main} />
          </Link>
        )
      })}
    </nav>
  )
}
