import { Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import { useTheme } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { getMealRecommendationStyles } from './styles'
import { SGLButton } from '../../../../components/UI/Button/SGLButton'
import { variantMap } from '../../../../components/UI/Typography/types'

interface MealDialogProps {
  name: string
  recipe: string
  fullRecipe?: string
  open: boolean
  onClose: () => void
}

export const MealDialog = ({ name, recipe, fullRecipe, open, onClose }: MealDialogProps) => {
  const theme = useTheme()
  const { t } = useTranslation()
  const styles = getMealRecommendationStyles(theme)

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle sx={styles.dialogTitle}>{name}</DialogTitle>
      <DialogContent>
        <Typography variant={variantMap.mediumText}>{fullRecipe || recipe}</Typography>
      </DialogContent>
      <DialogActions>
        <SGLButton onClick={onClose} fullWidth variant="contained" sx={styles.closeButton}>
          {t('mealRecommendation.close')}
        </SGLButton>
      </DialogActions>
    </Dialog>
  )
}
