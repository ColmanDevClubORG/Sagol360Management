import { SGLMealRecommendation } from './mealRecommendation'

export const DietTabExample = () => {
  const mealsData = [
    {
      name: 'סלמון אפוי',
      recipe: 'סלמון טרי אפוי עם לימון וצמחי תיבול, מומלץ מאוד להבריאות הלב',
    },
    {
      name: 'סלט ירוקים',
      recipe: 'תערובת ירוקים טרייה עם עגבניה, מלפפון וזיתים, עם שמן זית ללימון',
    },
    {
      name: 'עוף ברוטב עלים',
      recipe: 'עוף צלול עם רוטב עלים טבעי, עשיר בחלבונים וחומרים מזינים',
    },
  ]

  return (
    <div style={{ padding: '16px' }}>
      <h2>המלצות ארוחות</h2>
      {mealsData.map((meal, index) => (
        <SGLMealRecommendation
          key={index}
          name={meal.name}
          recipe={meal.recipe}
          onViewRecipe={() => alert(`צפייה ב: ${meal.name}`)}
        />
      ))}
    </div>
  )
}
