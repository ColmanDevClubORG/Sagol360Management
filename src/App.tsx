import './App.css'
import { SGLButton } from './components/UI/Button/SGLButton'
import { SGLSelect } from './components/UI/Select/SGLSelect'
import { SGLCheckbox } from './components/UI/Checkbox/SGLCheckbox'
import { SGLCard } from './components/UI/Card/SGLCard'
import { SGLTypography } from './components/UI/Typography/SGLTypography'

function App() {
  return (
    <>
      <SGLButton onClick={() => {}}>test</SGLButton>
      <SGLButton onClick={() => {}}>test</SGLButton>
      <SGLSelect options={[1, 1, 'sda']}></SGLSelect>
      <SGLCheckbox label="טקסט בדיקה" />
      <SGLCard variant="purple">
        <h1>Example text</h1>
      </SGLCard>
      <SGLCard variant="orange">
        <h1>Example text</h1>
      </SGLCard>
      <SGLTypography variant="largeTitle">טיפול בתא לחץ</SGLTypography>
      <SGLTypography variant="mediumTitle">התראות</SGLTypography>
      <SGLTypography variant="smallTitle">דיווח יומי</SGLTypography>
      <SGLTypography variant="largeText">תא כתום</SGLTypography>
      <SGLTypography variant="mediumText">הגיע הזמן למלא את הדיווח היומי שלך</SGLTypography>
      <SGLTypography variant="smallText">איכות שינה</SGLTypography>
      <SGLTypography variant="mediumTitle" color="purple.main">
        התראות
      </SGLTypography>
    </>
  )
}

export default App
