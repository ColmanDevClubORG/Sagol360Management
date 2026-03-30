import './App.css'
import { useTranslation } from 'react-i18next'
import { SGLButton } from './components/UI/Button/SGLButton'
import { SGLSelect } from './components/UI/Select/SGLSelect'
import { SGLCheckbox } from './components/UI/Checkbox/SGLCheckbox'
import { SGLCard } from './components/UI/Card/SGLCard'
import { SGLTypography } from './components/UI/Typography/SGLTypography'

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
          <SGLButton text="English" onClick={() => changeLanguage('en')} />
          <SGLButton text="עברית" onClick={() => changeLanguage('he')} />
          <SGLButton text="Русский" onClick={() => changeLanguage('ru')} />
          <SGLButton text="العربية" onClick={() => changeLanguage('ar')} />
        </div>
      </div>
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
