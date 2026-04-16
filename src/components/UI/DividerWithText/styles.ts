import { theme } from './../../../theme'
import type { CSSProperties } from '@mui/material'
export const dividerWithTextStyles = {
  dividerContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    gap: '1rem',
  },
  dividerLine: {
    flex: 1,
    height: '0.01rem',
    backgroundColor: theme.palette.lowOpacityGrey.main,
  } satisfies CSSProperties,
}
