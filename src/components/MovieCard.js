import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
    console.log(posterPath)
    console.log(IMG_CDN+posterPath)
  return (
    <div className='w-48'>
      <img alt='Movies card' src={IMG_CDN+posterPath}/>

      {/* <h1>{posterPath}</h1>
      <img src={IMG_CDN + posterPath} /> */}
    </div>
  )
}

export default MovieCard
