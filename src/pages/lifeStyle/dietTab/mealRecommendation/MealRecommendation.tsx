import { Box, Typography, Button, useTheme } from '@mui/material'
import { getMealRecommendationStyles } from './styles'

interface SGLMealRecommendationProps {
  name: string
  recipe: string
  onViewRecipe?: () => void
}

export const SGLMealRecommendation = ({ 
  name, 
  recipe, 
  onViewRecipe 
}: SGLMealRecommendationProps) => {
  const theme = useTheme()
  const mealRecommendationStyles = getMealRecommendationStyles(theme)
  
  return (
    <Box sx={mealRecommendationStyles.container}>
      <Box sx={mealRecommendationStyles.heroImage} />
      
      <Box sx={mealRecommendationStyles.content}>
        <Typography variant="h5" sx={mealRecommendationStyles.title}>
          {name}
        </Typography>
        <Typography variant="body2" sx={mealRecommendationStyles.recipe}>
          {recipe}
        </Typography>
      </Box>
      
      {onViewRecipe && (
        <Button 
          onClick={onViewRecipe}
          sx={mealRecommendationStyles.button}
          fullWidth
          variant="contained"
        >
          צפה במתכון המלא
        </Button>
      )}
    </Box>
  )
}
