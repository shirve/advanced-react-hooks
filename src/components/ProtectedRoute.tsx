import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

const ProtectedRoute = () => {
  const { user } = useSelector((state: RootState) => state.user)

  if (!user) {
    return <Navigate to='/signin' replace />
  }

  return <Outlet />
}

export default ProtectedRoute
