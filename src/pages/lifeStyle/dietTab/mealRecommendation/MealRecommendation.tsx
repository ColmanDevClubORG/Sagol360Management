import { Box, Typography, Button, useTheme, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import { useState } from 'react'
import { getMealRecommendationStyles } from './styles'

interface SGLMealRecommendationProps {
  name: string
  recipe: string
  fullRecipe?: string
}

export const SGLMealRecommendation = ({ 
  name, 
  recipe, 
  fullRecipe 
}: SGLMealRecommendationProps) => {
  const theme = useTheme()
  const mealRecommendationStyles = getMealRecommendationStyles(theme)
  const [openDialog, setOpenDialog] = useState(false)
  
  return (
    <>
      <Box sx={mealRecommendationStyles.container}>
        {/* Hero Image Section */}
        <Box sx={mealRecommendationStyles.heroImage} />
        
        {/* Content Section - CENTERED */}
        <Box sx={mealRecommendationStyles.content}>
          <Typography variant="h5" sx={mealRecommendationStyles.title}>
            {name}
          </Typography>
          <Typography variant="body2" sx={mealRecommendationStyles.recipe}>
            {recipe}
          </Typography>
        </Box>
        
        {/* CTA Button */}
        <Button 
          onClick={() => setOpenDialog(true)}
          sx={mealRecommendationStyles.button}
          fullWidth
          variant="contained"
        >
          צפה במתכון המלא
        </Button>
      </Box>

      {/* Full Recipe Dialog */}
      <Dialog 
        open={openDialog} 
        onClose={() => setOpenDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ textAlign: 'center', fontWeight: 700 }}>
          {name}
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            {fullRecipe || recipe}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} variant="contained" fullWidth>
            סגור
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
