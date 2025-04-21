import './App.css'
import { BrowserRouter} from "react-router-dom"
import IndexLayout from './assets/layout/IndexLayout'

function App() {

  return (
    <>
    <BrowserRouter >
      <IndexLayout  />
    </BrowserRouter>
    </>
  )
}

export default App
