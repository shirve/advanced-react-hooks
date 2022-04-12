import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'

const UseCallbackExample = () => {
  const [tasks, setTasks] = useState<string[]>([])

  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, 'new task'])
  }, [setTasks])

  return (
    <div className='w-50'>
      <Link to='/'>Back to HomePage</Link>
      <h1>useCallback hook example</h1>
      <p>
        Stops the Button component to rerender every time addTask function is
        called.
      </p>
      <Button addTask={addTask} />
      {tasks.map((task, index) => (
        <div key={index}>{task}</div>
      ))}
    </div>
  )
}

const Button = React.memo(({ addTask }: { addTask: () => void }) => {
  console.log('Button rendered')
  return (
    <div>
      <button className='btn btn-primary' onClick={addTask}>
        Add Task
      </button>
    </div>
  )
})

export default UseCallbackExample
