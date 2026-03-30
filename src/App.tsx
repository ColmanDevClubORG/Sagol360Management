import './App.css'
import { useTranslation } from 'react-i18next'
import { SGLButton } from './components/UI/Button/SGLButton'
import { SGLSelect } from './components/UI/Select/SGLSelect'
import { SGLCheckbox } from './components/UI/Checkbox/SGLCheckbox'
import { SGLCard } from './components/UI/Card/SGLCard'
import { SGLTypography } from './components/UI/Typography/SGLTypography'
import { SGLSlider } from './components/UI/Slider/SGLSlider'

function App() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <>
      <div
        style={{
          marginBottom: '24px',
          padding: '16px',
          border: '1px solid #ddd',
          borderRadius: '8px',
        }}
      >
        <SGLTypography variant="largeTitle">{t('welcome')}</SGLTypography>
        <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
          <SGLButton onClick={() => changeLanguage('en')}>English</SGLButton>
          <SGLButton onClick={() => changeLanguage('he')}>"עברית</SGLButton>
          <SGLButton onClick={() => changeLanguage('ru')}>Русский</SGLButton>
          <SGLButton onClick={() => changeLanguage('ar')}>العربية</SGLButton>
        </div>
      </div>
      <SGLButton variant="contained" onClick={() => {}}>
        test
      </SGLButton>
      <SGLButton variant="outlined" onClick={() => {}}>
        test
      </SGLButton>
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
      <SGLSlider value={7} onChange={() => {}} min={1} max={10} step={1} />
    </>
  )
}

export default App
