import { useState } from 'react'
import { QueryFunctionContext, useQuery } from 'react-query'
import { Link } from 'react-router-dom'

interface CharacterViewModel {
  id: number
  name: string
}

type CharactersQueryKey = [string, { page: number }]

const fetchCharacters = async ({
  queryKey,
}: QueryFunctionContext<CharactersQueryKey>) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character?page=${queryKey[1].page}`
  )
  return res.json()
}

const useGetCharacters = ({ page, ...options }: { page: number }) =>
  useQuery(['characters', { page }], fetchCharacters, {
    ...options,
  })

const ReactQueryExample = () => {
  const [page, setPage] = useState(1)
  const { status, data } = useGetCharacters({ page })

  return (
    <div className='w-50'>
      <Link to='/'>Back to HomePage</Link>
      <h1>react-query example</h1>
      <h5>Rick & Morty characters</h5>
      {status === 'loading' && <span>Loading...</span>}
      {status === 'success' &&
        data.results.map((character: CharacterViewModel) => (
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
