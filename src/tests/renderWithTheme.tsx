import { render } from '@testing-library/react'
import { ThemeProvider } from '@mui/material/styles'
import type { PropsWithChildren, ReactElement } from 'react'

import { theme } from '../theme'

const Wrapper = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export const renderWithTheme = (ui: ReactElement) => render(ui, { wrapper: Wrapper })
