import { useEffect, useState } from 'react'
import './App.scss'

const CAT_ENDPOINT_FACT = `https://cat-fact.herokuapp.com/facts/random`
const CAT_PREFIX_IMAGE = `https://cataas.com`
export function App() {
  const [fact, setFact] = useState()
  const [imgUrl, setImgUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_FACT)
      .then((response) => response.json())
      .then((data) => {
        setFact(data.text)
      })
  }, [])

  useEffect(() => {
    if (!fact) return
    const firsWord = fact.split(' ')[0]
    fetch(`https://cataas.com/cat/says/${firsWord}?json=true`)
      .then((response) => response.json())
      .then((data) => {
        const { url } = data
        setImgUrl(url)
      })
  }, [fact])

  return (
    <main className='main'>
      <h1 className='main__title'>App de Gatitos</h1>
      <div className='card'>
        {imgUrl && (
          <img
            className='card__image'
            src={CAT_PREFIX_IMAGE + imgUrl}
            alt={`Image extracted using the first word from: ${fact}`}
          />
        )}
        {fact && <p className='card__description'>{fact}</p>}
      </div>
    </main>
  )
}
