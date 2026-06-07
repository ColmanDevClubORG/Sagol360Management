import { Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import { useState } from 'react'
import { useTheme } from '@mui/material'
import { useTranslation } from 'react-i18next'
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
  imageUrl,
}: SGLMealRecommendationProps) => {
  const theme = useTheme()
  const { t } = useTranslation()
  const styles = getMealRecommendationStyles(theme)
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <>
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
            <SGLButton
              onClick={() => setOpenDialog(true)}
              variant="outlined"
              sx={styles.mealButton(theme)}
            >
              <SGLTypography variant="smallTitle">
                {t('mealRecommendation.viewFullRecipe')}
              </SGLTypography>
            </SGLButton>
          </div>
        </div>
      </SGLCard>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} fullWidth>
        <DialogTitle sx={styles.dialogTitle}>{name}</DialogTitle>
        <DialogContent>
          <Typography variant={variantMap.mediumText}>{fullRecipe || recipe}</Typography>
        </DialogContent>
        <DialogActions>
          <SGLButton
            onClick={() => setOpenDialog(false)}
            fullWidth
            variant="contained"
            sx={styles.closeButton}
          >
            {t('mealRecommendation.close')}
          </SGLButton>
        </DialogActions>
      </Dialog>
    </>
  )
}
