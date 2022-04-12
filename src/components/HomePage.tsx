import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <ul className='list-group'>
      <Link to='useref-example-1' className='text-decoration-none'>
        <li className='list-group-item list-group-item-action '>
          useRef example-1
        </li>
      </Link>
      <Link to='useref-example-2' className='text-decoration-none'>
        <li className='list-group-item list-group-item-action'>
          useRef example-2
        </li>
      </Link>
      <Link to='memory-leak-example' className='text-decoration-none'>
        <li className='list-group-item list-group-item-action'>
          memory leak example
        </li>
      </Link>
      <Link to='usememo-example' className='text-decoration-none'>
        <li className='list-group-item list-group-item-action'>
          useMemo example
        </li>
      </Link>
    </ul>
  )
}

export default HomePage
