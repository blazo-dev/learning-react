import './App.scss'
import { Header, Products, Footer } from './components'
import { products as initialProducts } from './mocks/products-mock.json'
import { useFilter } from './hooks'
import CartProvider from './context/cart.context'

export default function App () {
  const { filterProducts } = useFilter()

  const filteredProducts = filterProducts(initialProducts)
  return (
    <CartProvider>
      <Header />
      <main className='main'>
        <div className='wrapper'>
          <Products products={filteredProducts} />
        </div>
      </main>
      <Footer />
    </CartProvider>
  )
}
