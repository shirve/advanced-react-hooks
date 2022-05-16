import { useEffect, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { Link } from 'react-router-dom'

interface Character {
  id: number
  name: string
}

const fetchCharacters = async (page: number) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  )
  return await res.json()
}

const ReactQueryExample = () => {
  const client = useQueryClient()
  const [page, setPage] = useState(1)

  const { status, data } = useQuery(
    ['characters', page],
    () => fetchCharacters(page),
    { keepPreviousData: true, staleTime: 5000 }
  )

  // Prefetch next page
  useEffect(() => {
    if (data?.info.next) {
      client.prefetchQuery(['characters', page + 1], () =>
        fetchCharacters(page + 1)
      )
    }
  }, [data, page, client])

  return (
    <div className='w-50'>
      <Link to='/'>Back to HomePage</Link>
      <h1>react-query example</h1>
      <h5>Rick & Morty characters</h5>
      {status === 'loading' && <span>Loading...</span>}
      {status === 'success' &&
        data.results.map((character: Character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      <button
        className='btn btn-primary mt-2 me-2'
        onClick={() => setPage((page) => (data?.info.prev ? page - 1 : 1))}
        disabled={!data?.info.prev}
      >
        Previous Page
      </button>
      <button
        className='btn btn-primary mt-2'
        onClick={() => setPage((page) => (data?.info.next ? page + 1 : page))}
        disabled={!data?.info.next}
      >
        Next Page
      </button>
      <div className='d-flex flex-column'>
        <span>Current page: {page}</span>
        <span>Total pages: {data?.info.pages}</span>
      </div>
    </div>
  )
}

export default ReactQueryExample
