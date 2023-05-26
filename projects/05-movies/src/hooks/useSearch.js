import { useEffect, useRef, useState } from 'react'

export function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState()
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = search === ''
      return
    }

    if (search === '') {
      setError('Please enter a valid search term')
      return
    }

    if (search.match(/[0-9-]+$/)) {
      setError('Please enter a valid search term')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}
