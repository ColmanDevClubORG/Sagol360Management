import './App.css'
import { SGLButton } from './components/UI/Button/SGLButton'
import { SGLSelect } from './components/UI/Select/SGLSelect'
import { SGLCheckbox } from './components/UI/Checkbox/SGLCheckbox'
import { SGLCard } from './components/UI/Card/SGLCard'
import { Typography } from '@mui/material'
function App() {
  return (
    <>
      <SGLButton text="test" onClick={() => {}} />
      <SGLButton text="test" onClick={() => {}} />
      <SGLSelect options={[1, 1, 'sda']}></SGLSelect>
      <SGLCheckbox label="טקסט בדיקה" />
      <SGLCard variant="purple">
        <h1>Example text</h1>
      </SGLCard>
      <SGLCard variant="orange">
        <h1>Example text</h1>
      </SGLCard>
      <Typography variant="h1">טיפול בתא לחץ</Typography>
      <Typography variant="h2">התראות</Typography>
      <Typography variant="h3">דיווח יומי</Typography>
      <Typography variant="h4">תא כתום</Typography>
      <Typography variant="h5">הגיע הזמן למלא את הדיווח היומי שלך</Typography>
      <Typography variant="h6">איכות שינה</Typography>
    </>
  )
}

export default App
