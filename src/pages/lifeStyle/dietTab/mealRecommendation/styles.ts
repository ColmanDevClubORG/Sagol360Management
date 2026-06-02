import type { Theme, SxProps } from '@mui/material'
import type { CSSProperties } from '@mui/material'

export interface MealRecommendationStylesInterface {
  container: CSSProperties
  heroImage: (imageUrl?: string) => CSSProperties
  iconContainer: CSSProperties
  content: CSSProperties
  buttonWrapper: CSSProperties
  mealButton: (theme: Theme) => SxProps<Theme>
}

export const getMealRecommendationStyles = (theme: Theme): MealRecommendationStylesInterface => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    marginBottom: theme.spacing(2),
  } as CSSProperties,

  heroImage: (imageUrl?: string) => ({
    width: '100%',
    height: '180px',
    backgroundColor: theme.palette.lightGrey.main,
    backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    padding: theme.spacing(1.5),
  } as CSSProperties),

  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: theme.palette.lowOpacityWhite.main,
  } as CSSProperties,

  content: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    textAlign: 'center',
  } as CSSProperties,

  buttonWrapper: {
    padding: theme.spacing(1.5),
  } as CSSProperties,

  mealButton: (theme: Theme) => ({
    gap: '0.5rem',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.purple.main,
    border: `1px solid ${theme.palette.mediumGrey.main}`,
    width: '100%',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: theme.palette.purple50.main,
    },
  } as SxProps<Theme>),
})