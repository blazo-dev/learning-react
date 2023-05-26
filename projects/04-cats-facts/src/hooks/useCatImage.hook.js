import { useEffect, useState } from 'react'
import { getCatImage } from '../services'
import { CAT_PREFIX_IMAGE } from '../utils'

export function useCatImage({ fact }) {
  const [imgUrl, setImgUrl] = useState()

  useEffect(() => {
    if (!fact) return
    const firsWord = fact.split(' ')[0]
    getCatImage(firsWord).then((url) => setImgUrl(url))
  }, [fact])

  return { imgUrl: CAT_PREFIX_IMAGE + imgUrl }
}
