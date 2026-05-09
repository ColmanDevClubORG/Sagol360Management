import type { Theme } from '@mui/material'
import type { CSSProperties } from 'react'

export enum DividerOrientation {
  HORIZONTAL = 'horizontal',
  VERTICAL = 'vertical',
}

export interface DividerStylesInterface {
  dividerHorizontal: CSSProperties
  dividerVertical: CSSProperties
}

export const getDividerStyles = (theme: Theme): DividerStylesInterface => ({
  dividerHorizontal: {
    width: '100%',
    height: '1px',
    backgroundColor: theme.palette.mediumGrey?.main,
    marginTop: '1.5rem',
    marginBottom: '1.5rem',
  },

  dividerVertical: {
    width: '1px',
    height: '100%',
    backgroundColor: theme.palette.mediumGrey?.main,
    marginLeft: '1.5rem',
    marginRight: '1.5rem',
  },
})
