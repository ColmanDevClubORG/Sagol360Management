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
  it('should display the active page icon in active color', () => {
    renderNavBar('/home')

    const allLinks = screen.getAllByRole('link')
    const homeLink = allLinks.find((link) => link.getAttribute('href') === '/home')!
    const otherLinks = allLinks.filter((link) => link.getAttribute('href') !== '/home')

    expect(homeLink.className).not.toBe(otherLinks[0].className)

    otherLinks.forEach((link) => {
      expect(link.className).toBe(otherLinks[0].className)
    })
  })

  it('should change the URL when clicking each navbar button', async () => {
    const user = userEvent.setup()
    renderNavBar('/home')

    for (const navLink of NAV_LINKS) {
      const linkElement = screen
        .getAllByRole('link')
        .find((el) => el.getAttribute('href') === navLink.href)

      expect(linkElement).toHaveAttribute('href', navLink.href)

      await user.click(linkElement!)

      const updatedLinks = screen.getAllByRole('link')
      const clickedLink = updatedLinks.find((l) => l.getAttribute('href') === navLink.href)!
      const inactiveLink = updatedLinks.find((l) => l.getAttribute('href') !== navLink.href)!

      expect(clickedLink.className).not.toBe(inactiveLink.className)
    }
  })
})
