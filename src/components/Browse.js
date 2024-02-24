 import React   from 'react'
import Header from './Header' 

import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
 
 const Browse = () => {


  
  //  Fetch Data from tmdb API and update store
     useNowPlayingMovies();
     usePopularMovies();

   return (
     <div>
     <Header/>
      <MainContainer/>
     <SecondaryContainer/> 
     </div>
   );
 };
 
 export default Browse
 