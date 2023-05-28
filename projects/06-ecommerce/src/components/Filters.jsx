import { useId } from 'react'
import './Filters.scss'
import { useFilter } from '../hooks'

export default function Filters () {
  const { filters, setFilters } = useFilter()
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleMinPrice = (e) => {
    const inputValue = Number(e.target.value)
    if (isNaN(inputValue)) return
    if (inputValue < 0 || inputValue > 2000) return

    setFilters((prevState) => ({
      ...prevState,
      minPrice: inputValue
    }))
  }

  const handleChangeCategory = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <section className='filter-section'>
      <div className='filter-control'>
        <label
          htmlFor={minPriceFilterId}
          className='filter-label'
        >
          Minimun price to show: <strong>${filters.minPrice}</strong>
        </label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='2000'
          step='1'
          value={filters.minPriceValue}
          onChange={handleMinPrice}
          className='filter-input'
        />
      </div>
      <div className='filter-control'>
        <label
          htmlFor={categoryFilterId}
          className='filter-label'
        >
          Category
        </label>
        <select
          name='categories'
          id={categoryFilterId}
          className='filter-select'
          onChange={handleChangeCategory}
        >
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
          <option value='home-decoration'>Home Decoration</option>
          <option value='fragrances'>Fragrances</option>
          <option value='skincare'>Skincare</option>
          <option value='groceries'>Groceries</option>
        </select>
      </div>
    </section>
  )
}
