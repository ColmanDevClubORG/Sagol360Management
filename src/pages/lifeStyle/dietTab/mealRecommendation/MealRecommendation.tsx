import { useState } from 'react'
import { MealCard } from './MealCard'
import { MealDialog } from './MealDialog'

interface SGLMealRecommendationProps {
  mealType: string
  name: string
  recipe: string
  fullRecipe?: string
  imageUrl?: string
}

export const SGLMealRecommendation = ({
  mealType,
  name,
  recipe,
  fullRecipe,
  imageUrl,
}: SGLMealRecommendationProps) => {
  const [openDialog, setOpenDialog] = useState(false)

  return (
    <>
      <MealCard
        mealType={mealType}
        name={name}
        recipe={recipe}
        imageUrl={imageUrl}
        onOpenDialog={() => setOpenDialog(true)}
      />
      <MealDialog
        name={name}
        recipe={recipe}
        fullRecipe={fullRecipe}
        open={openDialog}
        onClose={() => setOpenDialog(false)}
      />
    </>
  )
}
