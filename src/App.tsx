import './App.css'
import { SGLButton } from './components/UI/Button/SGLButton'
import { SGLSelect } from './components/UI/Select/SGLSelect'
function App() {
  return (
    <>
      <SGLButton text="test" onClick={() => {}} />
      <SGLButton text="test" onClick={() => {}} />
      <SGLSelect options={[1, 1, 'sda']}></SGLSelect>
    </>
  )
}

export default App
