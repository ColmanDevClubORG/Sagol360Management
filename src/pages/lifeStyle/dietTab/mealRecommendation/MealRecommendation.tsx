import { Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import { useState } from 'react'
import { useTheme } from '@mui/material'
import { getMealRecommendationStyles } from './styles'
import { SGLButton } from '../../../../components/UI/Button/SGLButton'
import { SGLCard } from '../../../../components/UI/Card/SGLCard'
import { SGLLink } from '../../../../components/UI/Icons/Link/SGLLink'
import { SGLTypography } from '../../../../components/UI/Typography/SGLTypography'
import { variantMap } from '../../../../components/UI/Typography/types'

interface SGLMealRecommendationProps {
  name: string
  recipe: string
  fullRecipe?: string
  imageUrl?: string
}

export const SGLMealRecommendation = ({ 
  name, 
  recipe, 
  fullRecipe,
  imageUrl
}: SGLMealRecommendationProps) => {
  const theme = useTheme()
  const styles = getMealRecommendationStyles(theme)
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <>
      <SGLCard variant="white">
        <div style={styles.container}>
          <div style={styles.heroImage(imageUrl)}>
            <div style={styles.iconContainer}>
              <SGLLink size={20} color={theme.palette.midGrey.main} strokeWidth={2.5} />
            </div>
          </div>
          <div style={styles.content}>
            <Typography variant={variantMap.smallTitle}>
              {name}
            </Typography>
            <Typography variant={variantMap.smallText}>
              {recipe}
            </Typography>
          </div>
          <div style={styles.buttonWrapper}>
            <SGLButton 
              onClick={() => setOpenDialog(true)}
              variant="outlined"
              styles={styles.mealButton(theme)}
            >
              <SGLTypography variant="smallTitle">
                צפה במתכון המלא
              </SGLTypography>
            </SGLButton>
          </div>
        </div>
      </SGLCard>

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        maxWidth="tablet"
        fullWidth
      >
        <DialogTitle sx={{ textAlign: 'center', fontWeight: 700 }}>
          {name}
        </DialogTitle>
        <DialogContent>
          <Typography variant={variantMap.mediumText}>
            {fullRecipe || recipe}
          </Typography>
        </DialogContent>
        <DialogActions>
          <SGLButton 
            onClick={() => setOpenDialog(false)} 
            fullWidth 
            variant="contained"
            styles={{
              backgroundColor: theme.palette.purple.main,
              color: 'white',
            }}
          >
            סגור
          </SGLButton>
        </DialogActions>
      </Dialog>
    </>
  )
}
