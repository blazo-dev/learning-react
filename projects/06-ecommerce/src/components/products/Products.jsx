import ProductCard from './ProductCard'
import './Products.scss'

export default function Products ({ products }) {
  return (
    <ul className='products-list'>
      {
        products.map(product => (
          <li key={product.id} className='products-item'>
            <ProductCard product={product} />
          </li>))
      }
    </ul>
  )
}
