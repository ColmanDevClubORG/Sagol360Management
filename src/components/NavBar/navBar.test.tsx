import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import { I18nextProvider } from 'react-i18next'
import { NavBar } from './NavBar'
import { NAV_LINKS } from './constants'
import { theme } from '../../theme'
import i18n from '../../i18n'

const renderNavBar = (initialRoute: string) => {
  return render(
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <MemoryRouter initialEntries={[initialRoute]}>
          <NavBar />
        </MemoryRouter>
      </I18nextProvider>
    </ThemeProvider>,
  )
}

describe('NavBar', () => {
  const activeLink = NAV_LINKS[0]

  it('should display the active page icon in active color', () => {
    renderNavBar(activeLink.href)

    const allLinks = screen.getAllByRole('link')
    const homeLink = allLinks.find((link) => link.getAttribute('href') === activeLink.href)!
    const otherLinks = allLinks.filter((link) => link.getAttribute('href') !== activeLink.href)

    expect(homeLink).toHaveAttribute('aria-current', 'page')

    otherLinks.forEach((link) => {
      expect(link).not.toHaveAttribute('aria-current')
    })
  })

  it('should change the URL when clicking each navbar button', async () => {
    const user = userEvent.setup()
    renderNavBar(activeLink.href)

    for (const navLink of NAV_LINKS) {
      const linkElement = screen
        .getAllByRole('link')
        .find((el) => el.getAttribute('href') === navLink.href)

      expect(linkElement).toHaveAttribute('href', navLink.href)

      await user.click(linkElement!)

      const updatedLinks = screen.getAllByRole('link')
      const clickedLink = updatedLinks.find((l) => l.getAttribute('href') === navLink.href)!
      const inactiveLink = updatedLinks.find((l) => l.getAttribute('href') !== navLink.href)!

      expect(clickedLink).toHaveAttribute('aria-current', 'page')
      expect(inactiveLink).not.toHaveAttribute('aria-current')
    }
  })
})
