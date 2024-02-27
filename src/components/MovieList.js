import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {

    // console.log(movies)
    // console.log(movies[0].id)

    const gg =()=>{
      console.log("ewefed")
    }



    console.log()

  return (
    <div className='px-6 ' onClick={gg}>
         <h1 className=' text-lg md:text-3xl py-4  text-white '> {title}</h1>
        <div className='flex overflow-x-scroll '>
           
            <div className='flex '>
                {movies?.map((movie) => (
            <MovieCard key= {movie.id} posterPath={movie.poster_path}  />))}

            </div>
        </div>
      
    </div>
  )
}

export default MovieList;
