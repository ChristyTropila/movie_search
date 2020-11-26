import React from 'react'
import "./styling/Result.css"

const base_url="https://image.tmdb.org/t/p/w500/";

function Results({results,popup}){


 let resultsArray=results.map((result)=>{
        return<img key={result.id} className="imageResult" src={`${base_url}${result.poster_path}`} alt={result.name} onClick={()=>popup(result.id)}/>

    })
    return(
        <div className="results">
           {resultsArray}
        </div>
    )
}
export default Results;