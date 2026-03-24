import './App.css'
import { SGLButton } from './components/UI/Button/SGLButton'
import { SGLCheckbox } from './components/UI/Checkbox/SGLCheckbox'
import { SGLCard } from './components/UI/Card/SGLCard'
function App() {
  return (
    <>
      <SGLButton text="test" onClick={() => {}} />
      <SGLButton text="test" onClick={() => {}} />
      <SGLCheckbox label="טקסט בדיקה" />
      <SGLCard variant="purple">
        <h1>Example text</h1>
      </SGLCard>
      <SGLCard variant="orange">
        <h1>Example text</h1>
      </SGLCard>
    </>
  )
}

export default App
