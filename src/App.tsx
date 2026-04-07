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
          <SGLButton onClick={() => changeLanguage('en')}>{t('lang.en')}</SGLButton>
          <SGLButton onClick={() => changeLanguage('he')}>{t('lang.he')}</SGLButton>
          <SGLButton onClick={() => changeLanguage('ru')}>{t('lang.ru')}</SGLButton>
          <SGLButton onClick={() => changeLanguage('ar')}>{t('lang.ar')}</SGLButton>
        </div>
      </div>
      <SGLButton variant="contained" onClick={() => {}}>
        {t('test')}
      </SGLButton>
      <SGLButton variant="outlined" onClick={() => {}}>
        {t('test')}
      </SGLButton>
      <SGLSelect options={[1, 1, 'sda']}></SGLSelect>
      <SGLCheckbox label="טקסט בדיקה" />
      <SGLCard variant="purple">
        <h1>{t('example.text')}</h1>
      </SGLCard>
      <SGLCard variant="orange">
        <h1>{t('example.text')}</h1>
      </SGLCard>
      <SGLTypography variant="largeTitle">{t('progress.treatment')}</SGLTypography>
      <SGLTypography variant="mediumTitle">{t('alerts')}</SGLTypography>
      <SGLTypography variant="smallTitle">{t('daily.report')}</SGLTypography>
      <SGLTypography variant="largeText">{t('orange.cell')}</SGLTypography>
      <SGLTypography variant="mediumText">{t('time.to.fill.report')}</SGLTypography>
      <SGLTypography variant="smallText">{t('charts.sleepQuality')}</SGLTypography>
      <SGLTypography variant="mediumTitle" color="purple.main">
        {t('alerts')}
      </SGLTypography>
    </>
  )
}

export default App
