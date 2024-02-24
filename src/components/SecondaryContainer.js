import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies =useSelector((store)=>store.movies)
  return (

    movies.nowPlayingMovies &&(
    <div className=' bg-black'> 
    <div className='-mt-52 pl-12 relative z-20'>

       <MovieList title={"Now Playing "} movies ={movies.nowPlayingMovies}/> 
       <MovieList title={"Trending "} movies ={movies.nowPlayingMovies}/> 
       <MovieList title={"Popular "} movies ={movies.popularMovies}/> 
       <MovieList title={"Up coming movies "} movies ={movies.nowPlayingMovies}/> 
       <MovieList title={" most watch movies"} movies ={movies.nowPlayingMovies}/> 
       <MovieList title={"Romantic movies "} movies ={movies.nowPlayingMovies}/> 
       <MovieList title={"Drama movies"} movies ={movies.nowPlayingMovies}/> 
       </div>
    </div>
  )
  );
};

export default SecondaryContainer
