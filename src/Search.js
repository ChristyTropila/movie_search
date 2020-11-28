import React,{useState, useEffect}  from 'react'
import "./styling/Search.css"

function Search({handleInputChange,search}){
    
    return(
        <div className="searchContainer">
            <input className="searchBar" type="text" onChange={handleInputChange} onKeyPress={search} placeholder="Search For Movie..."/>
        </div>
    )
}
export default Search;