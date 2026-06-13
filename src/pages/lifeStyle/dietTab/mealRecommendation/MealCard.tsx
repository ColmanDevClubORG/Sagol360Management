import { Typography } from '@mui/material'
import { useTheme } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { getMealRecommendationStyles } from './styles'
import { SGLButton } from '../../../../components/UI/Button/SGLButton'
import { SGLCard } from '../../../../components/UI/Card/SGLCard'
import { SGLLink } from '../../../../components/UI/Icons/Link/SGLLink'
import { SGLTypography } from '../../../../components/UI/Typography/SGLTypography'
import { variantMap } from '../../../../components/UI/Typography/types'

interface MealCardProps {
  mealType: string
  name: string
  recipe: string
  imageUrl?: string
  onOpenDialog: () => void
}

export const MealCard = ({ mealType, name, recipe, imageUrl, onOpenDialog }: MealCardProps) => {
  const theme = useTheme()
  const { t } = useTranslation()
  const styles = getMealRecommendationStyles(theme)

  return (
    <>
      <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: 600 }}>
        {mealType}
      </Typography>
      <SGLCard variant="white">
        <div style={styles.container}>
          <div style={styles.heroImage(imageUrl)}>
            <div style={styles.iconContainer}>
              <SGLLink {...styles.linkIcon} />
            </div>
          </div>
          <div style={styles.content}>
            <Typography variant={variantMap.smallTitle}>{name}</Typography>
            <Typography variant={variantMap.smallText}>{recipe}</Typography>
          </div>
          <div style={styles.buttonWrapper}>
            <SGLButton onClick={onOpenDialog} variant="outlined" sx={styles.mealButton(theme)}>
              <SGLTypography variant="smallTitle">
                {t('mealRecommendation.viewFullRecipe')}
              </SGLTypography>
            </SGLButton>
          </div>
        </div>
      </SGLCard>
    </>
  )
}
