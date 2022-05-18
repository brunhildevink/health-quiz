import { useState, useEffect } from 'react'

const useFetch = (path: string) => {
  const [url, updateUrl] = useState(path)
  const [data, setData] = useState<string>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | undefined>(undefined)
  const [refetchIndex, setRefetchIndex] = useState(0)

  const refetch = () => {
    setRefetchIndex((prevRefetchIndex) => prevRefetchIndex + 1)
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(url, { mode: 'cors' })
      const result = await response.text()
      if (response.ok) {
        setData(result)
      }
    } catch (err) {
      if (err instanceof Error) setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [url, refetchIndex])

  return { data, error, loading, refetch, updateUrl }
}

export default useFetch
