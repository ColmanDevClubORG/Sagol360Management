import { useState, type MouseEvent } from 'react'
import MenuItem from '@mui/material/MenuItem'
import { SGLMenu } from '@/components/UI/Menu/SGLMenu'
import { SGLAvatar } from '@/components/UI/Icons/Avatar/SGLAvatar'
import { welcomeDesktopStyles } from '../styles'
import type { CSSProperties } from '@mui/material'
import { SplitTitle } from '../../splitTitle/SpliteTitle'
import { useTranslation } from 'react-i18next'

interface UserGreetingProps {
  userName: string
  styles?: CSSProperties
}

export const UserGreeting = ({ userName, styles }: UserGreetingProps) => {
  const { t, i18n } = useTranslation()
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const avatarText = userName.slice(0, 2)

  const handleOpenMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language)
    handleCloseMenu()
  }

  const languages = [
    { code: 'he', label: 'עברית' },
    { code: 'en', label: 'English' },
    { code: 'ru', label: 'Русский' },
    { code: 'ar', label: 'العربية' },
  ]

  return (
    <div style={{ ...welcomeDesktopStyles.sections, ...styles }}>
      <SplitTitle
        firstChild={t('good.night')}
        secondChild={`${userName} 👋`}
        firstVariant="smallText"
        secondVariant="smallTitle"
      />
      <SGLAvatar styles={{ backgroundColor: 'purple.main' }} onClick={handleOpenMenu}>
        {avatarText}
      </SGLAvatar>

      <SGLMenu anchorEl={anchorEl} isOpen={Boolean(anchorEl)} onClose={handleCloseMenu}>
        {languages.map((language) => (
          <MenuItem key={language.code} onClick={() => handleChangeLanguage(language.code)}>
            {language.label}
          </MenuItem>
        ))}
      </SGLMenu>
    </div>
  )
}
