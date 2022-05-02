import { Link } from 'react-router-dom'
import withMessage from '../hoc/withMessage'

interface Props {
  message: string
}

const WrappedComponentExample = ({ message }: Props) => {
  return (
    <div className='w-50'>
      <Link to='/'>Back to HomePage</Link>
      <h1>High Order Component example</h1>
      <p>
        <i>message</i> prop value from HOC: <i>{message}</i>
      </p>
    </div>
  )
}

const HighOrderComponentExample = withMessage(WrappedComponentExample)
export default HighOrderComponentExample
