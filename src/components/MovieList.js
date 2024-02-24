import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {

    console.log(movies)
    // console.log(movies[0].id)
  return (
    <div className='px-6  text-white'>
         <h1 className='text-3xl py-4 font-bold '> {title}</h1>
        <div className='flex overflow-x-scroll'>
           
            <div className='flex '>
                {movies?.map((movie) => 
            <MovieCard key= {movie.id} posterPath={movie.poster_path}  />)}

            </div>
        </div>
      
    </div>
  )
}

export default MovieList
