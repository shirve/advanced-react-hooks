import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import UseRefExample1 from './components/UseRefExample1'
import UseRefExample2 from './components/UseRefExample2'
import MemoryLeakExample from './components/MemoryLeakExample'
import UseMemoExample from './components/UseMemoExample'
import UseCallbackExample from './components/UseCallbackExample'

function App() {
  return (
    <Router>
      <main className='container mt-5'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='useref-example-1' element={<UseRefExample1 />} />
          <Route path='useref-example-2' element={<UseRefExample2 />} />
          <Route path='memory-leak-example' element={<MemoryLeakExample />} />
          <Route path='usememo-example' element={<UseMemoExample />} />
          <Route path='usecallback-example' element={<UseCallbackExample />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
