import React from 'react'
import { useContext } from 'react';
import {motion} from 'framer-motion';

import { MovieContext } from '../App';

const Moives = () => {
   const {filter} = useContext(MovieContext)
  return filter.map(movie => (
      

<motion.div className="col-12 col-sm-6 col-md-4 gap-1 my-2 position-relative"
key={movie.id}
 layout
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 transition={{duration: 0.5 }}
>
         <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path
         }`} alt={movie.title} className='img-fluid' />
         <p className='position-absolute card-title'>{movie.title}</p>
         </motion.div>

   
  )
  )
        }
export default Moives