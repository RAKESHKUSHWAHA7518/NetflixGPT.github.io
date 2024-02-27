import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { Logo_URL } from '../utils/constants'

const GptSearch = () => {
  return (
<>
    <div className='fixed -z-10'>

             <img className='h-screen object-cover' src= { Logo_URL} alt='logo'/>
             </div>
    <div className=''>
         
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
    </>
  )
}

export default GptSearch
