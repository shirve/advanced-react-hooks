import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CustomContext from '../context/CustomContext'
import UseContextExampleChild from './UseContextExampleChild'

const UseContextExampleParent = () => {
  const { contextText } = useContext(CustomContext)

  return (
    <div className='w-50'>
      <Link to='/'>Back to HomePage</Link>
      <h1>useContext hook example</h1>
      <p>text from the context: {contextText}</p>
      <UseContextExampleChild />
    </div>
  )
}

export default UseContextExampleParent
