import React from 'react'
import "./styling/Banner.css"
import Search from './Search.js'


function Banner({handleInputChange, search}){



    return(
        <div>
        <h1 className="headerTitle">Hollywood</h1>
         <Search handleInputChange={handleInputChange} search={search}/>
        </div>
    )
}

export default Banner;