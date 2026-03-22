import './App.css'
import { SGLButton } from './components/UI/Button/Button'

function App() {
  return (
    <h1>
      <SGLButton
        text="Sagol360"
        onClick={() => {
          alert(123456)
        }}
        aria-label="Sagol360"
        data-test-id="sagol360-button"
        variant="contained"
        style={{ color: 'red' }}
      />

      <SGLButton
        text="12312"
        onClick={() => {
          alert(123456)
        }}
        variant="contained"
      />

      <SGLButton
        text="423423"
        onClick={() => {
          alert(123456)
        }}
        aria-label="Sagol360"
        data-test-id="sagol360-button"
        variant="contained"
      />
    </h1>
  )
}

export default App
