import React, {useState, useEffect} from 'react';
import axios from './axios'
import requests from './requests';
import "./Row.css"

const base_url="https://image.tmdb.org/t/p/w500/";


function Row({title, fetchUrl}){

    const [movies, setMovies]=useState([]);

    //when row loads, pull information from api
    useEffect(() => {
     async function fetchData(){
         const request=await axios.get(fetchUrl);
         setMovies(request.data.results)
         return requests;
     }
     fetchData();
    }, [fetchUrl]);

    console.log(movies)

    let movieImages=movies.map(movie =>{
     return<img key={movie.id} className="image" src={`${base_url}${movie.poster_path}`} alt={movie.name}/>
    })


    return(
        <div className="row">
            {/* <h1>{title}</h1> */}
            <div className="row_images">
               {movieImages}
            </div>
        </div>
    )
}

export default Row;
