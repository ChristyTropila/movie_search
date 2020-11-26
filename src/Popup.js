import React from 'react'
import "./styling/Popup.css"

const base_url="https://image.tmdb.org/t/p/w500/";

function Popup({selected, closePopup}){

    console.log(selected)
    return(
        
        <div className="popup">
         <div className="content">
         <img key={selected.id} className="popupImage" src={`${base_url}${selected.poster_path}`} alt={selected.name}/>
         <h1 className="popupTitle">Title: {selected.original_title}</h1>
         <h3 className="date">Release Date: {selected.release_date}</h3>
     {/* <h3 className="production">Production Company: {selected.production_companies.length===0 ? "" : selected.production_companies[0].name}</h3>  */}
         <h3 className="description">Description: {selected.overview}</h3>
         <button className="popupBtn" onClick={closePopup}>Close</button>
         </div>
        </div>
    )
}

export default Popup