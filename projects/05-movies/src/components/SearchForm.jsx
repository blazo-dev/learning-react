import debounce from 'just-debounce-it'
import { useSearch } from '../hooks/useSearch'
import './SearchForm.scss'
import { useCallback } from 'react'

export function SearchForm ({ onSearch, onSort, sort }) {
  const { search, updateSearch, error } = useSearch()

  const debouncedSearch = useCallback(debounce((query) => {
    onSearch(query)
  }, 300), [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const query = e.target.searchQuery.value
    updateSearch(query)
    onSearch(query)
  }

  const handleChange = (e) => {
    const query = e.target.value
    if (query.startsWith(' ')) return

    updateSearch(query)
    debouncedSearch(query)
  }

  const handleSort = () => {
    onSort()
  }

  return (
    <form
      autoComplete='off'
      onSubmit={handleSubmit}
      className='form'
    >
      <input
        style={{
          border: '1px solid transparent',
          borderColor: error ? 'red' : 'transparent'
        }}
        value={search}
        onChange={handleChange}
        name='searchQuery'
        className='form__input'
        type='text'
        placeholder='Avengers, Spider Man, The Minios...'
      />
      <button
        type='submit'
        className='form__button'
      >
        Search
      </button>
      <label>Sort by name: <input type='checkbox' onChange={handleSort} checked={sort} /></label>
    </form>
  )
}
