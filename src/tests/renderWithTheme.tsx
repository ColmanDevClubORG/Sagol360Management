import { render } from '@testing-library/react'
import { ThemeProvider } from '@mui/material/styles'
import type { ReactElement } from 'react'

import { theme } from '../theme'

export const renderWithTheme = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)
