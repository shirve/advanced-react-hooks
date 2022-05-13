import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../app/store'
import { signOut } from '../redux/userSlice'

const ProtectedRouteExample = () => {
  const dispatch = useDispatch<AppDispatch>()

  const handleSignOut = () => {
    dispatch(signOut())
  }

  return (
    <div className='w-50'>
      <Link to='/'>Back to HomePage</Link>
      <h1>Protected route example</h1>
      <h3>Welcome to protected route!</h3>
      <p>
        You can now go back to Home Page and come back here anytime
        <br />
        ...at least until you Sign Out or refresh the site
      </p>
      <button type='button' className='btn btn-primary' onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  )
}

export default ProtectedRouteExample
