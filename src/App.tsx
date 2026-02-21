import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Sales from './pages/Sales'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sales' element={<Sales />} />
    </Routes>
  )
}

export default App
