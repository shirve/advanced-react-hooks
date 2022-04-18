import { useState, useContext } from 'react'
import CustomContext from '../context/CustomContext'

const UseContextExampleChild = () => {
  const [inputText, setInputText] = useState('')

  const { setContextText } = useContext(CustomContext)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setContextText(inputText)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-control mb-2'
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default UseContextExampleChild
