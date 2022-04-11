import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import UseRefExample1 from './components/UseRefExample1'

function App() {
  return (
    <Router>
      <main className='container mt-5'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='useref-example-1' element={<UseRefExample1 />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
