import { CAT_ENDPOINT_FACT } from '../utils'

export async function getCatFact() {
  const response = await fetch(CAT_ENDPOINT_FACT)
  const data = await response.json()
  return data.text
}

export async function getCatImage(query) {
  const response = await fetch(`https://cataas.com/cat/says/${query}?json=true`)
  const data = await response.json()
  return data.url
}
