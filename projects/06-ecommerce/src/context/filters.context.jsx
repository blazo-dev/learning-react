import { createContext, useMemo, useState } from 'react'

export const FiltersContext = createContext()

export default function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({ category: 'all', minPrice: 0 })

  return (
    <FiltersContext.Provider value={useMemo(() => ({ filters, setFilters }), [filters])}>
      {children}
    </FiltersContext.Provider>
  )
}
