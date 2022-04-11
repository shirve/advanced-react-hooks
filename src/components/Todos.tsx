import { useState, useEffect } from 'react'

interface ITodo {
  userId: number
  id: number
  title: string
  completed: boolean
}

const Todos = () => {
  const [loading, setLoading] = useState(true)
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const controller = new AbortController()

    const fetchTodos = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
        signal: controller.signal,
      })
      const data = await res.json()
      setTodos(data)
      setLoading(false)
    }
    fetchTodos()

    return () => {
      // if abort() is called during the fetch() promise then it rejects with DOMException
      controller.abort()
    }
  }, [])

  return loading ? <p>Loading...</p> : <p>{todos && 'Todos loaded'}</p>
}

export default Todos
