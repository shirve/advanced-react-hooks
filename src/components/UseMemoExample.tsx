import { useState, useEffect, useRef, useMemo } from 'react'
import { Link } from 'react-router-dom'

const UseMemoExample = () => {
  const [number, setNumber] = useState(1)
  const [increment, setIncrement] = useState(0)

  const factorial = useMemo(() => factorialOf(number), [number])

  const renders = useRef(1)

  useEffect(() => {
    renders.current = renders.current + 1
  })

  const onClick = () => {
    setIncrement((prevState) => prevState + 1)
  }

  return (
    <div className='w-50'>
      <Link to='/'>Back to HomePage</Link>
      <h1>useMemo hook example</h1>
      <p>Renders amount: {renders.current}</p>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(+e.target.value)}
        className='form-control w-25'
      />
      <p>
        Factorial of {number} is {factorial}
      </p>
      <button className='btn btn-primary' onClick={onClick}>
        Re-render
      </button>
    </div>
  )
}

const factorialOf = (n: number): number => {
  console.log(`factorialOf(${n}) called!`)
  return n <= 0 ? 1 : n * factorialOf(n - 1)
}

export default UseMemoExample
