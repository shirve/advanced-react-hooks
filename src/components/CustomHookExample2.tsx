import { Link } from 'react-router-dom'
import useLocalStorage from '../hooks/useLocalStorage'
import { TaskViewModel } from '../models/Task'

const CustomHookExample2 = () => {
  const [task, setTask] = useLocalStorage('task', '')
  const [tasks, setTasks] = useLocalStorage('tasks', [])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newTask = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    }

    setTasks([...tasks, newTask])
  }

  return (
    <div>
      <Link to='/'>Back to HomePage</Link>
      <h1>Custom Hook Example - useLocalStorage</h1>
      <form onSubmit={onSubmit}>
        <div className='mb-3'>
          <label className='form-label m-0'>Task:</label>
          <input
            type='text'
            className='form-control w-25'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
      <h4 className='mt-3'>Tasks in local storage:</h4>
      <ul>
        {tasks.map((task: TaskViewModel, index: number) => (
          <li key={index}>{task.task}</li>
        ))}
      </ul>
    </div>
  )
}

export default CustomHookExample2
