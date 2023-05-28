import CartProduct from './CartProduct'
import './CartProducts.scss'

export default function CartProducts ({ products }) {
  return (
    <ul className='cart-products'>

      {products.map((product) => <li className='cart-item' key={product.id}><CartProduct product={product} /></li>)}

    </ul>
  )
}
