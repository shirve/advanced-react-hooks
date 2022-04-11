import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const UseRefExample2 = () => {
  const [text, setText] = useState('')
  const renders = useRef(1)
  const prevText = useRef('')

  useEffect(() => {
    renders.current = renders.current + 1
    prevText.current = text
  }, [text])

  return (
    <div className='w-50'>
      <Link to='/'>Back to HomePage</Link>
      <h1>Getting Previous State</h1>
      <p>Renders amount: {renders.current}</p>
      <p>Previous text state: {prevText.current}</p>
      <p>Current text state: {text}</p>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        className='form-control'
      />
    </div>
  )
}

export default UseRefExample2
