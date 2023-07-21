import { createContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import ButtonFilter from './components/ButtonFilter'
import Moives from './components/Moives'
import { AnimatePresence } from 'framer-motion';
export const MovieContext = createContext()
function App() {
  const [popularMovies,setpopularMovies]=useState([]);
  const [filter,setfilter]=useState([]);
  const fetchdata = async ()=>{
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a39a357472adbdcdb504976d85cbd416&language=en-US&page=1`)
      const movies = await response.json();
      setpopularMovies(movies.results);
      setfilter(movies.results);
  }
  useEffect(()=>{
fetchdata();
// console.log(popularMovies.backdrop_path);
  }       
      ,[])
      const value={
        popularMovies,
        filter,
        setfilter
      }
  return (
    <MovieContext.Provider value={value}>
    <ButtonFilter/>
    <div className="row container mx-auto ">
      <AnimatePresence>
      <Moives/>
      </AnimatePresence>
    </div>
    </MovieContext.Provider>
  )
}

export default App
