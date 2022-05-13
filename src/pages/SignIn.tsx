import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../app/store'
import { signIn } from '../redux/userSlice'

const SignIn = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const handleSignIn = () => {
    dispatch(signIn())
    navigate('/protected-route-example')
  }

  return (
    <div className='w-50'>
      <Link to='/'>Back to HomePage</Link>
      <h1>Sign In Page</h1>
      <p>Sign In to access protected route</p>
      <button type='button' className='btn btn-primary' onClick={handleSignIn}>
        Sign In
      </button>
    </div>
  )
}

export default SignIn
