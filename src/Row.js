import React, {useState, useEffect} from 'react';
import axios from './axios'
import Popup from './Popup';
import requests from './requests';
import "./styling/Row.css"

const base_url="https://image.tmdb.org/t/p/w500/";


function Row({title, fetchUrl, popup}){

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

    let movieImages=movies.map(movie =>{
     return<img key={movie.id} className="image" src={`${base_url}${movie.poster_path}`} alt={movie.name} onClick={()=>popup(movie.id)}/>
    })


    return(
        <div className="row">
            <div className="row_images">
               {movieImages}
            </div>
        </div>
    )
}

export default Row;
