import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const CustomHookExample1 = () => {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {}
  )

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <Link to='/'>Back to HomePage</Link>
      <h1>Custom Hook Example - useFetch</h1>
      {data?.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  )
}

export default CustomHookExample1
