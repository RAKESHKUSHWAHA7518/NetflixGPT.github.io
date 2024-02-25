import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { Logo_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
         <div className='absolute -z-10'>

             <img src= { Logo_URL} alt='logo'/>
             </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch
