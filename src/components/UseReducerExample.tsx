import { useState, useReducer } from 'react'
import { Link } from 'react-router-dom'
import exampleReducer, { initialState } from '../reducers/exampleReducer'

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(exampleReducer, initialState)
  const [text, setText] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({ type: 'SET_TEXT', payload: text })
  }

  const handleClear = () => {
    dispatch({ type: 'CLEAR_TEXT' })
  }

  const handleColorChange = () => {
    dispatch({
      type: 'CHANGE_COLOR',
      payload: state.color === 'black' ? 'red' : 'black',
    })
  }

  return (
    <div className='w-50'>
      <Link to='/'>Back to HomePage</Link>
      <h1 style={{ color: state.color }}>useReducer hook example</h1>
      <p className='m-0'>Submitted text: {state.text}</p>
      <button
        type='button'
        className='btn btn-primary mb-3 me-2'
        onClick={handleClear}
      >
        Clear State
      </button>
      <button
        type='button'
        className='btn btn-primary mb-3'
        onClick={handleColorChange}
      >
        Change Color
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-control mb-2'
          placeholder='Type something'
          onChange={handleChange}
        />
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default UseReducerExample
