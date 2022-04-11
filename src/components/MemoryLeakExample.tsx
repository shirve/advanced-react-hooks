import { useState } from 'react'
import { Link } from 'react-router-dom'
import Todos from './Todos'

const MemoryLeakExample = () => {
  const [showTodo, setShowTodo] = useState(true)

  return (
    <div className='w-50'>
      <Link to='/'>Back to HomePage</Link>
      <h1>Memory Leak Fix</h1>
      {showTodo && <Todos />}
      <button
        className='btn btn-primary'
        onClick={() => setShowTodo(!showTodo)}
      >
        Toggle Todos
      </button>
      <p className='mt-3'>
        Clicking the button during fetching will unmount the Todos component and
        call abort() causing the fetch() promise to stop.
      </p>
    </div>
  )
}

export default MemoryLeakExample
