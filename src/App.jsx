import { BrowserRouter } from 'react-router-dom'
import RoutesConfig from './routes'
import Navbar from './components/common/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <RoutesConfig />
    </BrowserRouter>
  )
}

export default App
