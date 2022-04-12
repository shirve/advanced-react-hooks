import { useState, useEffect } from 'react'

const useFetch = (url: string, options: {}) => {
  const [loading, setLoading] = useState<boolean>(true)
  // "any" type just for the example because it's not important here
  const [error, setError] = useState<any | null>(null)
  const [data, setData] = useState<any[] | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options)
        const data = await res.json()
        setData(data)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return { data, error, loading }
}

export default useFetch
