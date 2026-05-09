import type { Theme, SxProps } from '@mui/material'

export interface MealRecommendationStylesInterface {
  container: SxProps<Theme>
  heroImage: SxProps<Theme>
  content: SxProps<Theme>
  title: SxProps<Theme>
  recipe: SxProps<Theme>
  button: SxProps<Theme>
}

export const getMealRecommendationStyles = (theme: Theme): MealRecommendationStylesInterface => ({
  container: {
    backgroundColor: theme.palette.background?.paper,
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: theme.shadows[2],
    marginBottom: '16px',
    display: 'flex',
    flexDirection: 'column',
  },

  heroImage: {
    width: '100%',
    height: '180px',
    backgroundColor: theme.palette.primary?.light,
  },

  content: {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    flex: 1,
    textAlign: 'center',
  },

  title: {
    fontWeight: 700,
    fontSize: '18px',
    color: theme.palette.text?.primary,
    margin: 0,
    textAlign: 'center',
  },

  recipe: {
    fontSize: '13px',
    color: theme.palette.text?.secondary,
    margin: 0,
    lineHeight: '1.5',
    textAlign: 'center',
  },

  button: {
    backgroundColor: theme.palette.primary?.main,
    color: theme.palette.primary?.contrastText,
    textTransform: 'none',
    fontSize: '14px',
    fontWeight: 600,
    borderRadius: 0,
    margin: '12px',
    marginTop: '8px',
    '&:hover': {
      backgroundColor: theme.palette.primary?.dark,
    },
  },
})
