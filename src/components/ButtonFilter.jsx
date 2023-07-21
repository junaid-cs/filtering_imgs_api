import React from 'react'
import {button} from '../utilitiz'
import { useState } from 'react'
import { useContext } from 'react';
import { MovieContext } from '../App';

const ButtonFilter = () => {
  // const buttton = ['All','Advancture']
  const [tabActive,settabActive] =useState(0);
  const{ popularMovies,setfilter } =useContext(MovieContext)
  const handlefilter=(id)=>{
    settabActive(id);
    const filterdMovie = popularMovies.filter(movie => movie.genre_ids.includes(id));
    if(id===0){
      setfilter(popularMovies);
    }
    else{
      setfilter(filterdMovie);
    }
  }
  return (
    <>
    <div className="container text-center">
      {
        button.map((btn)=>(
          <div key={btn.id}
          
           onClick={()=>{handlefilter(btn.id)}} 
           className={`btn btn-outline-dark mx-2 my-md-5 my-2 ${tabActive === btn.id ? "active" : undefined}`}>{btn.name}</div>

        ))
      }
    </div>
    </>
  )
}

export default ButtonFilter