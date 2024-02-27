import React from 'react'

import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'

import openai from '../utils/openai'

import { useRef } from 'react'
import { API_options } from '../utils/constants'
import { json } from 'react-router-dom'
import { addGptMovieResult } from '../utils/gptSlice'

const GptSearchBar = () => {

    const langKey = useSelector((store)=>store.config.lang)

    const searchText = useRef(null)

    const dispatch = useDispatch()

    const   searchmovieTMDB = async(movie)=>{

      const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+  movie+"&include_adult=false&language=en-US&page=1", API_options);

      const json = await data.json()

      return json.results;

    }

    const handleGptSearchClick = async() =>{
      console.log(searchText.current.value);

      //  make an API call to GPT API  and get Results

      const gptQuery = "Act as a Movies Recommended system and suggest some movies for the query :" +searchText.current.value + "only give me name of 10 movies,comma seperator like salar,gader,gader2, pushpa,kfg,kgp2";

      const gptResults= await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });
      console.log(gptResults.choices?.[0].message?.content);

       const gptMovies= gptResults.choices?.[0].message?.content.split(', ')

       const  promiseArray = gptMovies.map(movie=> searchmovieTMDB(movie))

       const tmdbResults =  await Promise.all(promiseArray);

       console.log(tmdbResults);

       dispatch(addGptMovieResult({ movieNames:gptMovies,movieResults:tmdbResults}));


    };
  return (
    <div className='pt-[20%] flex justify-center'>
     <form className='w-1/2  bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()} >

        <input ref={searchText} type="text" className='p-4 m-4  col-span-9' placeholder= {lang[langKey].gptSearchPlaceholder}/>
        <button className=' col-span-3 py-2 m-4 px-4 bg-red-600 text-white rounded-lg' onClick={handleGptSearchClick}>{lang[langKey].search}</button>

     </form>
    </div>
  )
}

export default GptSearchBar
