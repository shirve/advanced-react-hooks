import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../app/store'
import { Link } from 'react-router-dom'
import { increment, decrement, reset } from '../redux/counterSlice'

const ReduxCounterExample = () => {
  const { counter } = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className='w-50'>
      <Link to='/'>Back to HomePage</Link>
      <h1>Redux counter example</h1>
      <p>counter value: {counter}</p>
      <button
        type='button'
        className='btn btn-primary'
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        type='button'
        className='btn btn-primary ms-2 me-2'
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        type='button'
        className='btn btn-primary'
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>
    </div>
  )
}

export default ReduxCounterExample
