import './App.scss'
import { useCatFact, useCatImage } from './hooks'

export function App() {
  const { fact, refreshFact } = useCatFact()
  const { imgUrl } = useCatImage({ fact })

  return (
    <main className='main'>
      <h1 className='main__title'>App de Gatitos</h1>
      <div className='card'>
        {imgUrl && (
          <img
            className='card__image'
            src={imgUrl}
            alt={`Image extracted using the first word from: ${fact}`}
          />
        )}
        {fact && <p className='card__description'>{fact}</p>}
        <button onClick={refreshFact}>Get new fact</button>
      </div>
    </main>
  )
}
